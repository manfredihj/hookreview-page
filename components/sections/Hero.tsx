
import { CalButton } from "@/components/CalButton";

interface HeroProps {
  title: string;
  description: string;
  cta: string;
  calLink?: string;
}

export function Hero({ title, description, cta, calLink }: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="container py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-lg">{title}</h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">{description}</p>
        {calLink ? (
          <CalButton calLink={calLink} size="lg">
            {cta}
          </CalButton>
        ) : (
          <CalButton calLink="https://cal.com/julian-manfredi/agentes-ia-reunion-descubrimiento" size="lg">
            {cta}
          </CalButton>
        )}
      </div>
    </section>
  );
}
