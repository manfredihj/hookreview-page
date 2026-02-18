interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

interface SimplePricingProps {
  tiers: PricingTier[];
}

export function SimplePricing({ tiers }: SimplePricingProps) {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-6">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`text-center ${
                tier.highlighted
                  ? 'transform scale-110'
                  : ''
              }`}
            >
              <div className="text-white/70 text-sm mb-1">
                {tier.name}
              </div>
              <div className="text-3xl md:text-4xl font-extrabold text-brand-green">
                {tier.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
