'use client';

export async function trackConversion(eventName: string, customData?: Record<string, any>) {
  // Track en Facebook Pixel (client-side)
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', eventName, customData);
  }

  // Track en Conversions API (server-side)
  try {
    // Obtener cookies de Facebook
    const fbp = getCookie('_fbp');
    const fbc = getCookie('_fbc');

    await fetch('/api/conversion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        eventName,
        customData,
        fbp,
        fbc,
      }),
    });
  } catch (error) {
    console.error('Error tracking conversion:', error);
  }
}

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;

  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);

  if (parts.length === 2) {
    return parts.pop()?.split(';').shift() || null;
  }

  return null;
}
