import crypto from 'crypto';

const PIXEL_ID = process.env.FACEBOOK_PIXEL_ID || '';
const ACCESS_TOKEN = process.env.FACEBOOK_ACCESS_TOKEN || '';

interface ConversionEvent {
  event_name: string;
  event_time: number;
  event_source_url: string;
  user_data: {
    client_ip_address?: string;
    client_user_agent?: string;
    fbp?: string;
    fbc?: string;
  };
  custom_data?: Record<string, any>;
}

function hashData(data: string): string {
  return crypto.createHash('sha256').update(data.toLowerCase().trim()).digest('hex');
}

export async function sendConversionEvent(
  eventName: string,
  eventSourceUrl: string,
  userData: {
    ip?: string;
    userAgent?: string;
    fbp?: string;
    fbc?: string;
  },
  customData?: Record<string, any>
) {
  if (!PIXEL_ID || !ACCESS_TOKEN) {
    console.warn('Facebook Pixel ID or Access Token not configured');
    return;
  }

  const event: ConversionEvent = {
    event_name: eventName,
    event_time: Math.floor(Date.now() / 1000),
    event_source_url: eventSourceUrl,
    user_data: {
      client_ip_address: userData.ip,
      client_user_agent: userData.userAgent,
      fbp: userData.fbp,
      fbc: userData.fbc,
    },
  };

  if (customData) {
    event.custom_data = customData;
  }

  const url = `https://graph.facebook.com/v18.0/${PIXEL_ID}/events`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: [event],
        access_token: ACCESS_TOKEN,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error('Facebook Conversions API error:', result);
    }

    return result;
  } catch (error) {
    console.error('Error sending conversion event:', error);
  }
}
