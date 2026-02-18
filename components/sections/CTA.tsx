
import { CalButton } from "@/components/CalButton";

interface CallToActionProps {
  text: string;
  cta: string;
  calLink?: string;
}

export function CallToAction({ text, cta, calLink }: CallToActionProps) {
  return (
    <section className="py-16">
      <div className="container text-center rounded-2xl p-10 bg-white/10 backdrop-blur-sm border border-white/20 text-white">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">{text}</h2>
        <CalButton
          calLink={calLink || "https://cal.com/julian-manfredi/agentes-ia-reunion-descubrimiento"}
          size="lg"
          variant="secondary"
        >
          {cta}
        </CalButton>
      </div>
    </section>
  );
}
