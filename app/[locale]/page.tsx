import { notFound } from "next/navigation";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { HomeContent } from "@/components/sections/HomeContent";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { isValidLocale, type Locale } from "@/lib/i18n/config";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const t = await getDictionary(locale as Locale);

  return (
    <>
      <Navbar t={t} locale={locale as Locale} />
      <HomeContent t={t} />
      <Footer t={t} />
    </>
  );
}
