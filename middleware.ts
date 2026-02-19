import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { countryToLocale, defaultLocale, isValidLocale, type Locale } from '@/lib/i18n/config';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Check if user already has a locale preference
  const existingLocale = request.cookies.get('locale')?.value;
  if (existingLocale && isValidLocale(existingLocale)) {
    return response;
  }

  // Try to detect country from headers (Vercel, Cloudflare, etc.)
  const country =
    request.headers.get('x-vercel-ip-country') ||
    request.headers.get('cf-ipcountry') ||
    '';

  // Map country to locale
  const detectedLocale: Locale = countryToLocale[country] || defaultLocale;

  // Set locale cookie (expires in 1 year)
  response.cookies.set('locale', detectedLocale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365, // 1 year
    sameSite: 'lax',
  });

  return response;
}

export const config = {
  matcher: [
    // Match all paths except static files and api routes
    '/((?!_next/static|_next/image|favicon.ico|.*\\..*|api).*)',
  ],
};
