import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Intentar obtener la IP del cliente desde varios headers
  const forwarded = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  const cfConnectingIp = request.headers.get('cf-connecting-ip'); // Cloudflare

  let clientIp = '';

  if (forwarded) {
    // x-forwarded-for puede contener múltiples IPs separadas por coma
    clientIp = forwarded.split(',')[0].trim();
  } else if (realIp) {
    clientIp = realIp;
  } else if (cfConnectingIp) {
    clientIp = cfConnectingIp;
  }

  return NextResponse.json({
    ip: clientIp || 'unknown'
  });
}
