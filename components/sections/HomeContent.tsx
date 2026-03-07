"use client";

import type { Dictionary } from "@/lib/i18n/dictionaries";
import { VSL } from "./VSL";

interface HomeContentProps {
  t: Dictionary;
  vslUrl: string;
}

export function HomeContent({ t, vslUrl }: HomeContentProps) {

  return (
    <>
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="container py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight max-w-4xl mx-auto">
            {t.hero.title}
          </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href="#precios"
              className="bg-brand-green text-neutral-dark font-bold px-8 py-4 rounded-full hover:opacity-90 transition text-lg"
            >
              {t.hero.cta}
            </a>
            <a
              href="https://cal.com/julian-manfredi/gofidely-sales"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 text-white font-bold px-8 py-4 rounded-full hover:bg-pink-600 transition text-lg"
            >
              {t.hero.scheduleCall}
            </a>
          </div>

          <p className="text-white/60 text-sm">
            {t.hero.cancelAnytime}
          </p>
        </section>

        {/* Video Demo */}
        <VSL
          videoUrl={vslUrl}
          title="Mirá cómo funciona en 2 minutos"
        />

        {/* Video Demo Section - commented until video is ready
        <section className="container py-16">
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-white/80 text-lg mb-6">
              {t.videoDemo.watchIn3Min}
            </p>

            <div
              className="aspect-video bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white/20 transition"
              onClick={() => setVideoModalOpen(true)}
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-neutral-dark ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-white/60">{t.videoDemo.clickToWatch}</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-8 mt-8 text-white/80">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {t.videoDemo.setup5Min}
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {t.videoDemo.qrPerBranch}
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {t.videoDemo.realTimeMetrics}
              </div>
            </div>
          </div>
        </section>
        */}

        {/* Problem Section */}
        <section className="container py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            {t.problem.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">😊</div>
              <p className="text-white/80 text-lg">
                {t.problem.happyClients}
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">😤</div>
              <p className="text-white/80 text-lg">
                {t.problem.angryClients}
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">📊</div>
              <p className="text-white/80 text-lg">
                {t.problem.noMetrics}
              </p>
            </div>
          </div>

          <p className="text-center text-xl text-brand-green font-semibold">
            {t.problem.solution}
          </p>
        </section>

        {/* How it Works Section */}
        <section id="como-funciona" className="container py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            {t.howItWorks.title}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="w-10 h-10 bg-brand-green text-neutral-dark font-bold rounded-full flex items-center justify-center mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{t.howItWorks.step1Title}</h3>
              <p className="text-white/70">{t.howItWorks.step1Desc}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="w-10 h-10 bg-brand-green text-neutral-dark font-bold rounded-full flex items-center justify-center mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{t.howItWorks.step2Title}</h3>
              <p className="text-white/70">{t.howItWorks.step2Desc}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="w-10 h-10 bg-brand-green text-neutral-dark font-bold rounded-full flex items-center justify-center mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{t.howItWorks.step3Title}</h3>
              <p className="text-white/70">{t.howItWorks.step3Desc}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="w-10 h-10 bg-brand-green text-neutral-dark font-bold rounded-full flex items-center justify-center mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{t.howItWorks.step4Title}</h3>
              <p className="text-white/70">{t.howItWorks.step4Desc}</p>
            </div>
          </div>

          <div className="text-center mt-10">
            <a
              href="#precios"
              className="bg-brand-green text-neutral-dark font-bold px-8 py-4 rounded-full hover:opacity-90 transition text-lg inline-block"
            >
              {t.howItWorks.cta}
            </a>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="beneficios" className="container py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            {t.benefits.title}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 bg-brand-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">{t.benefits.increase5Stars}</h3>
                <p className="text-white/70 text-sm">{t.benefits.increase5StarsDesc}</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 bg-brand-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">{t.benefits.protectRating}</h3>
                <p className="text-white/70 text-sm">{t.benefits.protectRatingDesc}</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 bg-brand-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">{t.benefits.measureConversion}</h3>
                <p className="text-white/70 text-sm">{t.benefits.measureConversionDesc}</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 bg-brand-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">{t.benefits.employeeRanking}</h3>
                <p className="text-white/70 text-sm">{t.benefits.employeeRankingDesc}</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 bg-brand-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">{t.benefits.branchComparison}</h3>
                <p className="text-white/70 text-sm">{t.benefits.branchComparisonDesc}</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 bg-brand-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">{t.benefits.clearDashboard}</h3>
                <p className="text-white/70 text-sm">{t.benefits.clearDashboardDesc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Differentiator Section */}
        <section className="container py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            {t.differentiator.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-brand-green/10 to-transparent border border-brand-green/30 rounded-2xl p-8">
              <div className="w-12 h-12 bg-brand-green rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-neutral-dark" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{t.differentiator.multiBranch}</h3>
              <p className="text-white/70">{t.differentiator.multiBranchDesc}</p>
            </div>

            <div className="bg-gradient-to-br from-brand-green/10 to-transparent border border-brand-green/30 rounded-2xl p-8">
              <div className="w-12 h-12 bg-brand-green rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-neutral-dark" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{t.differentiator.qrPerEmployee}</h3>
              <p className="text-white/70">{t.differentiator.qrPerEmployeeDesc}</p>
            </div>

            <div className="bg-gradient-to-br from-brand-green/10 to-transparent border border-brand-green/30 rounded-2xl p-8">
              <div className="w-12 h-12 bg-brand-green rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-neutral-dark" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{t.differentiator.smartDashboard}</h3>
              <p className="text-white/70">{t.differentiator.smartDashboardDesc}</p>
            </div>
          </div>
        </section>

        {/* Cases / Results Section */}
        <section className="container py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            {t.cases.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="text-3xl mb-4">🍽️</div>
              <h3 className="text-lg font-semibold text-white mb-2">{t.cases.restaurant}</h3>
              <p className="text-white/70 mb-4">{t.cases.restaurantDesc}</p>
              <p className="text-white/60 text-sm italic">&quot;{t.cases.restaurantQuote}&quot;</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="text-3xl mb-4">💇</div>
              <h3 className="text-lg font-semibold text-white mb-2">{t.cases.salon}</h3>
              <p className="text-white/70 mb-4">{t.cases.salonDesc}</p>
              <p className="text-white/60 text-sm italic">&quot;{t.cases.salonQuote}&quot;</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="text-3xl mb-4">🏪</div>
              <h3 className="text-lg font-semibold text-white mb-2">{t.cases.chain}</h3>
              <p className="text-white/70 mb-4">{t.cases.chainDesc}</p>
              <p className="text-white/60 text-sm italic">&quot;{t.cases.chainQuote}&quot;</p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="precios" className="container py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            {t.pricing.title}
          </h2>
          <p className="text-white/70 text-center mb-12">{t.pricing.subtitle}</p>

          {/* Multi-tier pricing (Argentina) */}
          {'tiers' in t.pricing && t.pricing.tiers ? (
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {(t.pricing.tiers as Array<{ name: string; price: string; description: string; features: string[]; cta: string; highlighted?: boolean; tag?: string }>).map((tier, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-6 ${
                    tier.highlighted
                      ? "bg-gradient-to-br from-brand-green/10 to-transparent border-2 border-brand-green"
                      : "bg-white/10 backdrop-blur-sm border border-white/20"
                  }`}
                >
                  <div className="text-center mb-6">
                    {tier.tag && (
                      <span className="inline-block bg-brand-green text-neutral-dark text-xs font-bold px-3 py-1 rounded-full mb-3">
                        {tier.tag}
                      </span>
                    )}
                    <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                    <div className="text-4xl font-bold text-white mb-1">
                      {tier.price}<span className="text-lg font-normal text-white/60">{t.pricing.perMonth}</span>
                    </div>
                    <p className="text-white/60 text-sm">{tier.description}</p>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature: string, fIndex: number) => (
                      <li key={fIndex} className="flex items-center gap-3 text-white/80 text-sm">
                        <svg className="w-4 h-4 text-brand-green flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://app.gofidely.com/register"
                    className={`block w-full font-bold py-3 rounded-full transition text-center ${
                      tier.highlighted
                        ? "bg-brand-green text-neutral-dark hover:opacity-90"
                        : "bg-white/20 text-white hover:bg-white/30"
                    }`}
                  >
                    {tier.cta}
                  </a>
                </div>
              ))}
            </div>
          ) : (
            /* Single plan pricing (MX, EN) */
            (() => {
              const pricing = t.pricing as { promoTag: string; price: string; originalPrice: string; perMonth: string; feature1: string; feature2: string; feature3: string; feature4: string; feature5: string; feature6: string; additionalBranch: string; cta: string; cardRequired: string };
              return (
                <div className="max-w-md mx-auto">
                  <div className="bg-gradient-to-br from-brand-green/10 to-transparent border-2 border-brand-green rounded-2xl p-8">
                    <div className="text-center mb-6">
                      <span className="inline-block bg-brand-green text-neutral-dark text-sm font-bold px-3 py-1 rounded-full mb-3">
                        {pricing.promoTag}
                      </span>
                      <div className="text-5xl font-bold text-white mb-2">
                        {pricing.price}<span className="text-xl font-normal text-white/60">{pricing.perMonth}</span>
                      </div>
                      <div className="text-white/50 line-through text-lg">
                        {pricing.originalPrice}{pricing.perMonth}
                      </div>
                    </div>

                    <ul className="space-y-3 mb-8">
                      <li className="flex items-center gap-3 text-white/80">
                        <svg className="w-5 h-5 text-brand-green flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {pricing.feature1}
                      </li>
                      <li className="flex items-center gap-3 text-white/80">
                        <svg className="w-5 h-5 text-brand-green flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {pricing.feature2}
                      </li>
                      <li className="flex items-center gap-3 text-white/80">
                        <svg className="w-5 h-5 text-brand-green flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {pricing.feature3}
                      </li>
                      <li className="flex items-center gap-3 text-white/80">
                        <svg className="w-5 h-5 text-brand-green flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {pricing.feature4}
                      </li>
                      <li className="flex items-center gap-3 text-white/80">
                        <svg className="w-5 h-5 text-brand-green flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {pricing.feature5}
                      </li>
                      <li className="flex items-center gap-3 text-white/80">
                        <svg className="w-5 h-5 text-brand-green flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {pricing.feature6}
                      </li>
                    </ul>

                    <p className="text-center text-white/60 text-sm mb-6">
                      {pricing.additionalBranch}
                    </p>

                    <a
                      href="https://app.gofidely.com/register"
                      className="block w-full bg-brand-green text-neutral-dark font-bold py-4 rounded-full hover:opacity-90 transition text-center text-lg"
                    >
                      {pricing.cta}
                    </a>

                    <p className="text-center text-white/50 text-xs mt-4">
                      {pricing.cardRequired}
                    </p>

                    {/* Promo Code */}
                    <div className="mt-6 pt-6 border-t border-white/20">
                      <h4 className="text-lg font-semibold text-white mb-2">{t.promo.title}</h4>
                      <p className="text-white/70 text-sm">
                        {t.promo.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })()
          )}

          {'tiers' in t.pricing && (
            <p className="text-center text-white/50 text-sm mt-6">
              {t.pricing.cardRequired}
            </p>
          )}
        </section>

        {/* FAQ Section */}
        <section id="faq" className="container py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            {t.faq.title}
          </h2>

          <div className="max-w-3xl mx-auto space-y-4">
            <details className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl group">
              <summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium">
                {t.faq.q1}
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <p className="px-6 pb-6 text-white/70">
                {t.faq.a1}
              </p>
            </details>

            <details className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl group">
              <summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium">
                {t.faq.q2}
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <p className="px-6 pb-6 text-white/70">
                {t.faq.a2}
              </p>
            </details>

            <details className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl group">
              <summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium">
                {t.faq.q3}
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <p className="px-6 pb-6 text-white/70">
                {t.faq.a3}
              </p>
            </details>

            <details className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl group">
              <summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium">
                {t.faq.q4}
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <p className="px-6 pb-6 text-white/70">
                {t.faq.a4}
              </p>
            </details>

            <details className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl group">
              <summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium">
                {t.faq.q5}
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <p className="px-6 pb-6 text-white/70">
                {t.faq.a5}
              </p>
            </details>

            <details className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl group">
              <summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium">
                {t.faq.q6}
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <p className="px-6 pb-6 text-white/70">
                {t.faq.a6}
              </p>
            </details>

            <details className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl group">
              <summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium">
                {t.faq.q7}
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <p className="px-6 pb-6 text-white/70">
                {t.faq.a7}
              </p>
            </details>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="container py-16">
          <div className="bg-gradient-to-r from-brand-primary to-brand-pink rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t.finalCta.title}
            </h2>
            <p className="text-white/80 mb-8">
              {t.finalCta.subtitle}
            </p>
            <a
              href="https://app.gofidely.com/register"
              className="bg-brand-green text-neutral-dark font-bold px-10 py-4 rounded-full hover:opacity-90 transition text-lg inline-block"
            >
              {t.finalCta.cta}
            </a>
          </div>
        </section>
      </main>

      {/* Video Modal - commented until video is ready
      {videoModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setVideoModalOpen(false)}
        >
          <div
            className="bg-neutral-dark rounded-2xl p-4 max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end mb-2">
              <button
                onClick={() => setVideoModalOpen(false)}
                className="text-white/60 hover:text-white"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <div className="aspect-video bg-black rounded-xl flex items-center justify-center">
              <p className="text-white/60">{t.videoModal.placeholder}</p>
            </div>
          </div>
        </div>
      )}
      */}
    </>
  );
}
