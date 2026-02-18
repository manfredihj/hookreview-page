
import { Card } from "@/components/ui/card";

export function Features({ items }: { items: { title: string; text: string }[] }) {
  return (
    <section className="container py-16 grid gap-6 md:grid-cols-3">
      {items.map((f, i) => (
        <Card key={i} className="bg-white/10 backdrop-blur-sm border-white/20">
          <h3 className="text-xl font-semibold mb-2 text-white">{f.title}</h3>
          <p className="text-white/80">{f.text}</p>
        </Card>
      ))}
    </section>
  );
}
