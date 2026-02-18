import { Navbar } from "@/components/sections/Navbar";
import { CalButton } from "@/components/CalButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="container py-24 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <span className="text-brand-green font-semibold text-sm">SUITE CRM CONVERSACIONAL</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            Automatiza tu atención<br />
            y <span className="text-brand-green">aumenta ventas con IA</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
            Resuelve consultas, cierra ventas y gestiona todo desde un solo chat
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <CalButton
              calLink="https://cal.com/julian-manfredi/agentes-ia-reunion-descubrimiento"
              size="lg"
            >
              Agendar demostración gratuita
            </CalButton>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-brand-green">x3</div>
              <div className="text-white/70 text-sm">conversiones</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/20"></div>
            <div>
              <div className="text-4xl font-bold text-brand-green">-50%</div>
              <div className="text-white/70 text-sm">tiempo en chat</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/20"></div>
            <div>
              <div className="text-4xl font-bold text-brand-green">24/7</div>
              <div className="text-white/70 text-sm">atención activa</div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="container py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Agiliza tu operativa
              </h2>
              <p className="text-white/80 mb-8 text-lg">
                Automatiza la atención con tu asistente IA. Integra inteligencia artificial a tu negocio para que pueda:
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-green/20 rounded-lg p-3 mt-1">
                    <svg className="w-6 h-6 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Atender</h3>
                    <p className="text-white/70">Resuelve todas las preguntas frecuentes automáticamente.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-brand-green/20 rounded-lg p-3 mt-1">
                    <svg className="w-6 h-6 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Vender</h3>
                    <p className="text-white/70">Conecta a tus clientes con lo que buscan y cierra ventas.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-brand-green/20 rounded-lg p-3 mt-1">
                    <svg className="w-6 h-6 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Asistir</h3>
                    <p className="text-white/70">Crea pedidos, chequea inventario, corrige productos y más.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="bg-gradient-to-br from-brand-primary to-brand-pink rounded-xl p-6 text-white text-center">
                <div className="text-6xl mb-4">💬</div>
                <h3 className="text-2xl font-bold mb-2">Un. Solo. Chat.</h3>
                <p className="text-white/90">
                  WhatsApp, Instagram y Facebook desde un mismo lugar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="container py-16">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-12 text-center">
            <div className="text-5xl md:text-6xl font-bold text-brand-green mb-4">78%</div>
            <p className="text-xl md:text-2xl text-white font-medium">
              de los clientes le compra a la empresa que responde primero
            </p>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="container py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Soluciones para tu negocio
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Atención al Cliente */}
            <a
              href="/soluciones-ia-para-atencion-al-cliente"
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-brand-green/50 transition-all"
            >
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-green transition-colors">
                Atención al Cliente
              </h3>
              <p className="text-white/70 mb-4">
                Atendé por WhatsApp e Instagram 24/7 sin estar conectado. IA que responde, agenda y organiza.
              </p>
              <div className="text-brand-green font-semibold group-hover:underline">
                Ver solución →
              </div>
            </a>

            {/* Ventas / CRM */}
            <a
              href="/soluciones-ai-para-ventas"
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-brand-green/50 transition-all"
            >
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-green transition-colors">
                Ventas / CRM
              </h3>
              <p className="text-white/70 mb-4">
                CRM conversacional con IA. Atiende por WhatsApp e Instagram, califica leads y cierra ventas 24/7.
              </p>
              <div className="text-brand-green font-semibold group-hover:underline">
                Ver solución →
              </div>
            </a>

            {/* E-commerce */}
            <a
              href="/soluciones-ai-para-ecommerce"
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-brand-green/50 transition-all"
            >
              <div className="text-4xl mb-4">🛒</div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-green transition-colors">
                E-commerce
              </h3>
              <p className="text-white/70 mb-4">
                Tu tienda en WhatsApp con IA. Catálogo, asistencia, pagos y seguimiento 24/7.
              </p>
              <div className="text-brand-green font-semibold group-hover:underline">
                Ver solución →
              </div>
            </a>

            {/* Inmobiliarias */}
            <a
              href="/soluciones-ai-para-inmobiliarias"
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-brand-green/50 transition-all"
            >
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-green transition-colors">
                Inmobiliarias
              </h3>
              <p className="text-white/70 mb-4">
                Califica leads automáticamente. Filtra por presupuesto, zona y tipo de propiedad.
              </p>
              <div className="text-brand-green font-semibold group-hover:underline">
                Ver solución →
              </div>
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6 max-w-2xl mx-auto">
            {/* Gastronomía */}
            <a
              href="/soluciones-ai-para-restaurantes"
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-brand-green/50 transition-all"
            >
              <div className="text-4xl mb-4">🍽️</div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-green transition-colors">
                Gastronomía
              </h3>
              <p className="text-white/70 mb-4">
                Automatizá pedidos y consultas de tu restaurante por WhatsApp 24/7.
              </p>
              <div className="text-brand-green font-semibold group-hover:underline">
                Ver solución →
              </div>
            </a>

            {/* Agencias */}
            <a
              href="/partner-ai-agentes"
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-brand-green/50 transition-all"
            >
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-green transition-colors">
                Agencias
              </h3>
              <p className="text-white/70 mb-4">
                Marca blanca para agencias. Ofrecé automatizaciones IA sin infraestructura.
              </p>
              <div className="text-brand-green font-semibold group-hover:underline">
                Ver solución →
              </div>
            </a>
          </div>
        </section>

        {/* Final CTA */}
        <section className="container py-16">
          <div className="bg-gradient-to-br from-brand-primary to-brand-pink rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Vende más por chat, con menos esfuerzo
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Agenda una reunión para un recorrido personalizado con uno de nuestros expertos – sin compromiso.
            </p>
            <CalButton
              calLink="https://cal.com/julian-manfredi/agentes-ia-reunion-descubrimiento"
              size="lg"
              variant="secondary"
            >
              Agendar demostración gratuita
            </CalButton>
          </div>
        </section>
      </main>
    </>
  );
}
