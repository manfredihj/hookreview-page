import { Locale } from './config';

const dictionaries = {
  'en': () => import('@/locales/en.json').then((module) => module.default),
  'es-AR': () => import('@/locales/es-AR.json').then((module) => module.default),
  'es-MX': () => import('@/locales/es-MX.json').then((module) => module.default),
};

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

export const getDictionary = async (locale: Locale) => {
  const loader = dictionaries[locale] ?? dictionaries['en'];
  return loader();
};
