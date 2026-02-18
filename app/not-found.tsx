import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="container text-center">
        <h1 className="text-6xl font-extrabold text-white mb-4">404</h1>
        <p className="text-xl text-white/80 mb-8">Página no encontrada</p>
        <Link
          href="/"
          className="inline-block bg-brand-green text-neutral-dark px-6 py-3 rounded-2xl font-medium hover:opacity-90 transition"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
