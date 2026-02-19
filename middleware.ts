import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { locales, countryToLocale, defaultLocale, isValidLocale, type Locale } from '@/lib/i18n/config';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if pathname already has a locale prefix
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Detect locale from cookie or IP
  let locale: Locale = defaultLocale;

  const cookieLocale = request.cookies.get('locale')?.value;
  if (cookieLocale && isValidLocale(cookieLocale)) {
    locale = cookieLocale;
  } else {
    // Try to detect country from headers (Vercel, Cloudflare, etc.)
    const country =
      request.headers.get('x-vercel-ip-country') ||
      request.headers.get('cf-ipcountry') ||
      '';
    locale = countryToLocale[country] || defaultLocale;
  }

  // Redirect to locale-prefixed URL
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;

  const response = NextResponse.redirect(url);

  // Set locale cookie for future visits
  response.cookies.set('locale', locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365, // 1 year
    sameSite: 'lax',
  });

  return response;
}

export const config = {
  matcher: [
    // Match all paths except static files, api routes, and special Next.js paths
    '/((?!_next/static|_next/image|favicon.ico|.*\\..*|api|sitemap.xml).*)',
  ],
};
