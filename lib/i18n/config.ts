export const locales = ['en', 'es-AR', 'es-MX'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  'en': 'English',
  'es-AR': 'Español (AR)',
  'es-MX': 'Español (MX)',
};

export const localeFlags: Record<Locale, string> = {
  'en': '🇺🇸',
  'es-AR': '🇦🇷',
  'es-MX': '🇲🇽',
};

export const countryToLocale: Record<string, Locale> = {
  AR: 'es-AR',
  MX: 'es-MX',
  US: 'en',
  GB: 'en',
  CA: 'en',
  AU: 'en',
};

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
