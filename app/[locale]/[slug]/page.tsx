import { notFound } from "next/navigation";
import { getLandingContent } from "@/lib/content";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { VSL } from "@/components/sections/VSL";
import { Pricing } from "@/components/sections/Pricing";
import { CallToAction } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { FacebookViewContent } from "@/components/FacebookViewContent";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { isValidLocale, type Locale } from "@/lib/i18n/config";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = await getLandingContent(slug);

  if (!data) {
    return {
      title: "Página no encontrada",
      description: "La página que buscás no existe.",
    };
  }

  const cleanTitle = data.title.replace(/[🛒🏠🚀]/g, '').trim();

  return {
    title: cleanTitle,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      type: "website",
      url: `https://hookflow-landing-page.vercel.app/${slug}`,
      images: [
        {
          url: "/logo-white.png",
          width: 1200,
          height: 630,
          alt: cleanTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      images: ["/logo-white.png"],
    },
    alternates: {
      canonical: `https://hookflow-landing-page.vercel.app/${slug}`,
    },
  };
}

export default async function LandingPage({ params }: Props) {
  const { locale, slug } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const data = await getLandingContent(slug);
  const t = await getDictionary(locale as Locale);

  if (!data) {
    return (
      <main className="container py-24">
        <h1 className="text-3xl font-bold">Página no encontrada</h1>
        <p className="text-neutral-gray mt-2">Verificá la URL o volvé al inicio.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <FacebookViewContent
        content_name={data.fbEventParams?.content_name}
        content_ids={data.fbEventParams?.content_ids}
        content_type={data.fbEventParams?.content_type}
        value={data.fbEventParams?.value}
        currency={data.fbEventParams?.currency}
        niche={data.niche}
      />
      <Hero title={data.title} description={data.description} cta={data.cta} calLink={data.calLink} />
      {data.videoUrl && <VSL videoUrl={data.videoUrl} title={data.videoTitle} />}
      <Features items={data.features} />
      {data.pricingTiers && (
        <Pricing
          title={data.pricingTitle}
          subtitle={data.pricingSubtitle}
          tiers={data.pricingTiers}
          showPrice={data.showPricing !== false}
          calLink={data.calLink}
        />
      )}
      {data.ctaBlock && <CallToAction text={data.ctaBlock.text} cta={data.ctaBlock.cta} calLink={data.calLink} />}
      <Footer t={t} />
    </main>
  );
}
