export const locales = ['ar', 'mx', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  'ar': 'Español (AR)',
  'mx': 'Español (MX)',
  'en': 'English',
};

export const localeFlags: Record<Locale, string> = {
  'ar': '🇦🇷',
  'mx': '🇲🇽',
  'en': '🇺🇸',
};

// Map URL locale to full locale code for HTML lang attribute
export const localeToLang: Record<Locale, string> = {
  'ar': 'es-AR',
  'mx': 'es-MX',
  'en': 'en',
};

// Map country code (from IP) to locale
export const countryToLocale: Record<string, Locale> = {
  AR: 'ar',
  MX: 'mx',
  US: 'en',
  GB: 'en',
  CA: 'en',
  AU: 'en',
};

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
