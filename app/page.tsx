import { cookies } from "next/headers";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { HomeContent } from "@/components/sections/HomeContent";
import { getDictionary, type Dictionary } from "@/lib/i18n/dictionaries";
import { defaultLocale, isValidLocale, type Locale } from "@/lib/i18n/config";

export default async function Home() {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get("locale")?.value;
  const locale: Locale = localeCookie && isValidLocale(localeCookie) ? localeCookie : defaultLocale;

  const t: Dictionary = await getDictionary(locale);

  return (
    <>
      <Navbar t={t} locale={locale} />
      <HomeContent t={t} />
      <Footer t={t} />
    </>
  );
}
