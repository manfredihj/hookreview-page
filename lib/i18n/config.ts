export const locales = ['ar', 'mx', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'mx';

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
  // Argentina
  AR: 'ar',
  // México y Latinoamérica (usan español MX)
  MX: 'mx',
  CO: 'mx', // Colombia
  CL: 'mx', // Chile
  PE: 'mx', // Perú
  EC: 'mx', // Ecuador
  VE: 'mx', // Venezuela
  UY: 'mx', // Uruguay
  PY: 'mx', // Paraguay
  BO: 'mx', // Bolivia
  CR: 'mx', // Costa Rica
  PA: 'mx', // Panamá
  GT: 'mx', // Guatemala
  HN: 'mx', // Honduras
  SV: 'mx', // El Salvador
  NI: 'mx', // Nicaragua
  DO: 'mx', // República Dominicana
  PR: 'mx', // Puerto Rico
  CU: 'mx', // Cuba
  ES: 'mx', // España
  // English
  US: 'en',
  GB: 'en',
  CA: 'en',
  AU: 'en',
  NZ: 'en', // Nueva Zelanda
  IE: 'en', // Irlanda
};

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
