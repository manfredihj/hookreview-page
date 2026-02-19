import { Locale } from './config';

const dictionaries = {
  'ar': () => import('@/locales/ar.json').then((module) => module.default),
  'mx': () => import('@/locales/mx.json').then((module) => module.default),
  'en': () => import('@/locales/en.json').then((module) => module.default),
};

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

export const getDictionary = async (locale: Locale) => {
  const loader = dictionaries[locale] ?? dictionaries['en'];
  return loader();
};
