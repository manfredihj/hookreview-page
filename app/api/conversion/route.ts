import { NextRequest, NextResponse } from 'next/server';
import { sendConversionEvent } from '@/lib/facebook-conversions';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { eventName, customData, fbp, fbc } = body;

    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || '';
    const userAgent = request.headers.get('user-agent') || '';
    const referer = request.headers.get('referer') || '';

    await sendConversionEvent(
      eventName,
      referer,
      {
        ip,
        userAgent,
        fbp,
        fbc,
      },
      customData
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Conversion API error:', error);
    return NextResponse.json({ success: false, error: 'Failed to send conversion' }, { status: 500 });
  }
}
