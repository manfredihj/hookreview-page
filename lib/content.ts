
export type PricingTier = {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
};

export type Landing = {
  title: string;
  description: string;
  cta: string;
  calLink?: string;
  features: { title: string; text: string }[];
  ctaBlock?: { text: string; cta: string };
  videoUrl?: string;
  videoTitle?: string;
  showPricing?: boolean;
  pricingTitle?: string;
  pricingSubtitle?: string;
  pricingTiers?: PricingTier[];
  niche?: string;
  fbEventParams?: {
    content_name?: string;
    content_ids?: string[];
    content_type?: string;
    value?: number;
    currency?: string;
  };
};

export const LANDINGS: Record<string, Landing> = {
  "resenas-google-para-restaurantes": {
    title: "Conseguí más reseñas 5 estrellas para tu restaurante",
    description: "Convertí cada cliente satisfecho en una reseña positiva en Google. QR en mesa, seguimiento automático y más visibilidad para tu local.",
    cta: "Probar ahora",
    calLink: "https://cal.com/gofidely/demo",
    videoUrl: "https://gofidely.wistia.com/medias/4kufh6ejqv",
    videoTitle: "Mirá cómo funciona",
    niche: "restaurants",
    fbEventParams: {
      content_name: "Landing Restaurantes",
      content_ids: ["restaurantes-reviews"],
      content_type: "product",
      currency: "USD",
    },
    features: [
      { title: "QR en cada mesa", text: "Cada mesa tiene su código QR único. El cliente escanea al final de la comida y deja su reseña en segundos." },
      { title: "Filtra feedback negativo", text: "Si el cliente tuvo una mala experiencia, capturás el feedback internamente antes de que llegue a Google." },
      { title: "Ranking por mozo", text: "Sabé qué empleados generan más reseñas positivas y premiá a los mejores." },
      { title: "Dashboard en tiempo real", text: "Mirá todas tus reseñas, rating promedio y tendencias desde un solo lugar." }
    ],
    ctaBlock: { text: "¿Listo para llenar tu perfil de Google de 5 estrellas?", cta: "Probar ahora" },
    showPricing: true,
    pricingTitle: "Planes para restaurantes",
    pricingSubtitle: "14 días de prueba gratis. Cancelás cuando quieras.",
    pricingTiers: [
      {
        name: "Starter",
        price: "USD 59/mes",
        description: "1 sucursal • 200 reseñas/mes",
        features: [
          "1 sucursal",
          "200 reseñas/mes",
          "QRs ilimitados por empleado",
          "Dashboard completo",
          "Filtro de feedback negativo"
        ],
        cta: "14 días gratis"
      },
      {
        name: "Growth",
        price: "USD 119/mes",
        description: "3 sucursales • 800 reseñas/mes",
        features: [
          "3 sucursales",
          "800 reseñas/mes",
          "QRs ilimitados por empleado",
          "Dashboard avanzado",
          "Ranking por empleado",
          "Soporte prioritario"
        ],
        cta: "14 días gratis",
        highlighted: true
      },
      {
        name: "Scale",
        price: "USD 199/mes",
        description: "20 sucursales • Reseñas ilimitadas",
        features: [
          "Hasta 20 sucursales",
          "Reseñas ilimitadas",
          "QRs ilimitados",
          "Comparativa entre sucursales",
          "API e integraciones",
          "Soporte dedicado"
        ],
        cta: "14 días gratis"
      }
    ]
  },
  "resenas-google-para-peluquerias": {
    title: "Más reseñas 5 estrellas para tu peluquería o barbería",
    description: "Tus clientes felices son tu mejor publicidad. Convertí cada corte perfecto en una reseña en Google automáticamente.",
    cta: "Probar ahora",
    calLink: "https://cal.com/gofidely/demo",
    videoUrl: "https://gofidely.wistia.com/medias/4kufh6ejqv",
    videoTitle: "Mirá cómo funciona",
    niche: "hair_salons",
    fbEventParams: {
      content_name: "Landing Peluquerías",
      content_ids: ["peluquerias-reviews"],
      content_type: "product",
      currency: "USD",
    },
    features: [
      { title: "QR en cada estación", text: "Cada peluquero o barbero tiene su código QR. El cliente escanea después del servicio y deja su reseña." },
      { title: "Ranking por estilista", text: "Identificá a los profesionales que más reseñas generan y motivá a todo el equipo." },
      { title: "Recordatorio post-visita", text: "Si el cliente no dejó reseña, enviamos un recordatorio amigable por WhatsApp o SMS." },
      { title: "Protegé tu reputación", text: "Capturá feedback negativo antes de que llegue a Google y resolvé el problema directamente." }
    ],
    ctaBlock: { text: "¿Querés que cada cliente hable bien de vos en Google?", cta: "Probar ahora" },
    showPricing: true,
    pricingTitle: "Planes para salones de belleza",
    pricingSubtitle: "14 días de prueba gratis. Cancelás cuando quieras.",
    pricingTiers: [
      {
        name: "Starter",
        price: "USD 59/mes",
        description: "1 sucursal • 200 reseñas/mes",
        features: [
          "1 sucursal",
          "200 reseñas/mes",
          "QR por estilista",
          "Dashboard completo",
          "Filtro de feedback negativo"
        ],
        cta: "14 días gratis"
      },
      {
        name: "Growth",
        price: "USD 119/mes",
        description: "3 sucursales • 800 reseñas/mes",
        features: [
          "3 sucursales",
          "800 reseñas/mes",
          "QRs ilimitados por estilista",
          "Ranking por estilista",
          "Dashboard avanzado",
          "Soporte prioritario"
        ],
        cta: "14 días gratis",
        highlighted: true
      },
      {
        name: "Scale",
        price: "USD 199/mes",
        description: "20 sucursales • Reseñas ilimitadas",
        features: [
          "Hasta 20 sucursales",
          "Reseñas ilimitadas",
          "Comparativa entre locales",
          "Reportes consolidados",
          "Soporte dedicado"
        ],
        cta: "14 días gratis"
      }
    ]
  },
  "resenas-google-para-clinicas": {
    title: "Más pacientes confían en clínicas con buenas reseñas",
    description: "El 84% de los pacientes leen reseñas antes de elegir un profesional de salud. Conseguí más reseñas 5 estrellas de forma automática.",
    cta: "Probar ahora",
    calLink: "https://cal.com/gofidely/demo",
    videoUrl: "https://gofidely.wistia.com/medias/4kufh6ejqv",
    videoTitle: "Mirá cómo funciona",
    niche: "clinics",
    fbEventParams: {
      content_name: "Landing Clínicas",
      content_ids: ["clinicas-reviews"],
      content_type: "product",
      currency: "USD",
    },
    features: [
      { title: "QR en recepción o consultorio", text: "El paciente escanea al terminar su consulta. Proceso simple y rápido que no interrumpe el flujo." },
      { title: "Por profesional", text: "Cada médico o especialista puede tener su propio código. Ideal para clínicas con varios profesionales." },
      { title: "Cumplimiento de privacidad", text: "No solicitamos datos sensibles. Solo facilitamos que el paciente satisfecho comparta su experiencia." },
      { title: "Alertas de feedback", text: "Recibí notificaciones cuando un paciente reporta una mala experiencia para actuar de inmediato." }
    ],
    ctaBlock: { text: "¿Querés que más pacientes elijan tu clínica?", cta: "Probar ahora" },
    showPricing: true,
    pricingTitle: "Planes para clínicas y consultorios",
    pricingSubtitle: "14 días de prueba gratis. Cancelás cuando quieras.",
    pricingTiers: [
      {
        name: "Starter",
        price: "USD 59/mes",
        description: "1 sucursal • 200 reseñas/mes",
        features: [
          "1 consultorio/clínica",
          "200 reseñas/mes",
          "QR por profesional",
          "Dashboard completo",
          "Alertas de feedback negativo"
        ],
        cta: "14 días gratis"
      },
      {
        name: "Growth",
        price: "USD 119/mes",
        description: "3 sucursales • 800 reseñas/mes",
        features: [
          "3 clínicas",
          "800 reseñas/mes",
          "QRs ilimitados por profesional",
          "Dashboard por profesional",
          "Reportes mensuales",
          "Soporte prioritario"
        ],
        cta: "14 días gratis",
        highlighted: true
      },
      {
        name: "Scale",
        price: "USD 199/mes",
        description: "20 sucursales • Reseñas ilimitadas",
        features: [
          "Hasta 20 sedes",
          "Reseñas ilimitadas",
          "Comparativa entre sedes",
          "Integraciones",
          "Soporte dedicado"
        ],
        cta: "14 días gratis"
      }
    ]
  },
  "resenas-google-para-gimnasios": {
    title: "Conseguí más miembros con reseñas 5 estrellas",
    description: "Los gimnasios con mejores reseñas atraen más inscripciones. Automatizá la recolección de reseñas de tus miembros satisfechos.",
    cta: "Probar ahora",
    calLink: "https://cal.com/gofidely/demo",
    videoUrl: "https://gofidely.wistia.com/medias/4kufh6ejqv",
    videoTitle: "Mirá cómo funciona",
    niche: "gyms",
    fbEventParams: {
      content_name: "Landing Gimnasios",
      content_ids: ["gimnasios-reviews"],
      content_type: "product",
      currency: "USD",
    },
    features: [
      { title: "QR en recepción y vestuarios", text: "Ubicá códigos QR en puntos estratégicos donde tus miembros puedan dejar reseñas fácilmente." },
      { title: "Campañas post-clase", text: "Enviá solicitudes de reseña después de clases grupales o sesiones con entrenador personal." },
      { title: "Ranking por instructor", text: "Identificá qué instructores generan más satisfacción y reseñas positivas." },
      { title: "Detectá insatisfacción", text: "Capturá el feedback de miembros descontentos antes de que cancelen o dejen reseñas negativas." }
    ],
    ctaBlock: { text: "¿Querés que tu gimnasio sea el mejor valorado de la zona?", cta: "Probar ahora" },
    showPricing: true,
    pricingTitle: "Planes para gimnasios y centros fitness",
    pricingSubtitle: "14 días de prueba gratis. Cancelás cuando quieras.",
    pricingTiers: [
      {
        name: "Starter",
        price: "USD 59/mes",
        description: "1 sucursal • 200 reseñas/mes",
        features: [
          "1 sede",
          "200 reseñas/mes",
          "QR por instructor",
          "Dashboard completo",
          "Filtro de feedback negativo"
        ],
        cta: "14 días gratis"
      },
      {
        name: "Growth",
        price: "USD 119/mes",
        description: "3 sucursales • 800 reseñas/mes",
        features: [
          "3 sedes",
          "800 reseñas/mes",
          "QRs ilimitados por instructor",
          "Ranking por instructor",
          "Dashboard avanzado",
          "Soporte prioritario"
        ],
        cta: "14 días gratis",
        highlighted: true
      },
      {
        name: "Scale",
        price: "USD 199/mes",
        description: "20 sucursales • Reseñas ilimitadas",
        features: [
          "Hasta 20 sedes",
          "Reseñas ilimitadas",
          "Comparativa entre sedes",
          "Integraciones con CRM",
          "Soporte dedicado"
        ],
        cta: "14 días gratis"
      }
    ]
  },
  "resenas-google-para-hoteles": {
    title: "Más reservas directas con reseñas 5 estrellas",
    description: "El 93% de los viajeros leen reseñas antes de reservar. Conseguí más reseñas positivas de tus huéspedes satisfechos.",
    cta: "Probar ahora",
    calLink: "https://cal.com/gofidely/demo",
    videoUrl: "https://gofidely.wistia.com/medias/4kufh6ejqv",
    videoTitle: "Mirá cómo funciona",
    niche: "hotels",
    fbEventParams: {
      content_name: "Landing Hoteles",
      content_ids: ["hoteles-reviews"],
      content_type: "product",
      currency: "USD",
    },
    features: [
      { title: "QR en habitación y recepción", text: "El huésped escanea el código QR en el check-out o desde la habitación. Proceso simple y no invasivo." },
      { title: "Timing perfecto", text: "Solicitá la reseña en el momento ideal: después de una buena experiencia pero antes de que el huésped se vaya." },
      { title: "Multi-plataforma", text: "Dirigí a los huéspedes a Google, TripAdvisor o Booking según tu estrategia." },
      { title: "Recuperación de experiencias", text: "Si un huésped tuvo problemas, capturá el feedback y resolvelo antes de que se vaya insatisfecho." }
    ],
    ctaBlock: { text: "¿Querés que tu hotel destaque en las búsquedas?", cta: "Probar ahora" },
    showPricing: true,
    pricingTitle: "Planes para hoteles y alojamientos",
    pricingSubtitle: "14 días de prueba gratis. Cancelás cuando quieras.",
    pricingTiers: [
      {
        name: "Starter",
        price: "USD 59/mes",
        description: "1 sucursal • 200 reseñas/mes",
        features: [
          "1 propiedad",
          "200 reseñas/mes",
          "QRs ilimitados",
          "Dashboard completo",
          "Google + TripAdvisor"
        ],
        cta: "14 días gratis"
      },
      {
        name: "Growth",
        price: "USD 119/mes",
        description: "3 sucursales • 800 reseñas/mes",
        features: [
          "3 propiedades",
          "800 reseñas/mes",
          "QRs ilimitados",
          "Múltiples plataformas",
          "Alertas en tiempo real",
          "Soporte prioritario"
        ],
        cta: "14 días gratis",
        highlighted: true
      },
      {
        name: "Scale",
        price: "USD 199/mes",
        description: "20 sucursales • Reseñas ilimitadas",
        features: [
          "Hasta 20 propiedades",
          "Reseñas ilimitadas",
          "Comparativa entre propiedades",
          "Integraciones con PMS",
          "Soporte dedicado"
        ],
        cta: "14 días gratis"
      }
    ]
  },
  "resenas-google-para-talleres": {
    title: "Más clientes confían en talleres con buenas reseñas",
    description: "La confianza es clave en el rubro automotor. Conseguí más reseñas 5 estrellas y diferenciáte de la competencia.",
    cta: "Probar ahora",
    calLink: "https://cal.com/gofidely/demo",
    videoUrl: "https://gofidely.wistia.com/medias/4kufh6ejqv",
    videoTitle: "Mirá cómo funciona",
    niche: "auto_shops",
    fbEventParams: {
      content_name: "Landing Talleres",
      content_ids: ["talleres-reviews"],
      content_type: "product",
      currency: "USD",
    },
    features: [
      { title: "QR en mostrador", text: "El cliente escanea cuando retira su vehículo. Momento ideal para capturar una reseña positiva." },
      { title: "Seguimiento post-servicio", text: "Enviá un recordatorio amigable un día después del servicio para asegurar la satisfacción." },
      { title: "Por mecánico", text: "Identificá qué técnicos generan más satisfacción y reconocé su trabajo." },
      { title: "Manejo de reclamos", text: "Si algo salió mal, capturá el feedback antes de que llegue a Google y resolvé el problema." }
    ],
    ctaBlock: { text: "¿Querés ser el taller mejor valorado de tu zona?", cta: "Probar ahora" },
    showPricing: true,
    pricingTitle: "Planes para talleres mecánicos",
    pricingSubtitle: "14 días de prueba gratis. Cancelás cuando quieras.",
    pricingTiers: [
      {
        name: "Starter",
        price: "USD 59/mes",
        description: "1 sucursal • 200 reseñas/mes",
        features: [
          "1 taller",
          "200 reseñas/mes",
          "QR por mecánico",
          "Dashboard completo",
          "Filtro de feedback negativo"
        ],
        cta: "14 días gratis"
      },
      {
        name: "Growth",
        price: "USD 119/mes",
        description: "3 sucursales • 800 reseñas/mes",
        features: [
          "3 talleres",
          "800 reseñas/mes",
          "QRs ilimitados por mecánico",
          "Ranking por mecánico",
          "Dashboard avanzado",
          "Soporte prioritario"
        ],
        cta: "14 días gratis",
        highlighted: true
      },
      {
        name: "Scale",
        price: "USD 199/mes",
        description: "20 sucursales • Reseñas ilimitadas",
        features: [
          "Hasta 20 sucursales",
          "Reseñas ilimitadas",
          "Comparativa entre sucursales",
          "Integraciones con DMS",
          "Soporte dedicado"
        ],
        cta: "14 días gratis"
      }
    ]
  },
  "resenas-google-para-spas": {
    title: "Más clientes eligen spas con excelentes reseñas",
    description: "La experiencia de bienestar empieza antes de la visita. Conseguí más reseñas 5 estrellas y atraé nuevos clientes.",
    cta: "Probar ahora",
    calLink: "https://cal.com/gofidely/demo",
    videoUrl: "https://gofidely.wistia.com/medias/4kufh6ejqv",
    videoTitle: "Mirá cómo funciona",
    niche: "spas",
    fbEventParams: {
      content_name: "Landing Spas",
      content_ids: ["spas-reviews"],
      content_type: "product",
      currency: "USD",
    },
    features: [
      { title: "QR post-tratamiento", text: "El cliente escanea después de su tratamiento cuando está más relajado y satisfecho." },
      { title: "Por terapeuta", text: "Cada profesional puede tener su código QR. Ideal para spas con varios especialistas." },
      { title: "Experiencia premium", text: "El proceso de solicitar reseña es elegante y acorde a la experiencia de tu spa." },
      { title: "Feedback privado", text: "Capturá sugerencias y quejas internamente para mejorar sin afectar tu reputación online." }
    ],
    ctaBlock: { text: "¿Querés que tu spa sea el mejor valorado?", cta: "Probar ahora" },
    showPricing: true,
    pricingTitle: "Planes para spas y centros de bienestar",
    pricingSubtitle: "14 días de prueba gratis. Cancelás cuando quieras.",
    pricingTiers: [
      {
        name: "Starter",
        price: "USD 59/mes",
        description: "1 sucursal • 200 reseñas/mes",
        features: [
          "1 spa",
          "200 reseñas/mes",
          "QR por terapeuta",
          "Dashboard completo",
          "Filtro de feedback negativo"
        ],
        cta: "14 días gratis"
      },
      {
        name: "Growth",
        price: "USD 119/mes",
        description: "3 sucursales • 800 reseñas/mes",
        features: [
          "3 spas",
          "800 reseñas/mes",
          "QRs ilimitados por terapeuta",
          "Ranking por terapeuta",
          "Dashboard avanzado",
          "Soporte prioritario"
        ],
        cta: "14 días gratis",
        highlighted: true
      },
      {
        name: "Scale",
        price: "USD 199/mes",
        description: "20 sucursales • Reseñas ilimitadas",
        features: [
          "Hasta 20 ubicaciones",
          "Reseñas ilimitadas",
          "Comparativa entre sedes",
          "Branding personalizado",
          "Soporte dedicado"
        ],
        cta: "14 días gratis"
      }
    ]
  },
  "resenas-google-para-veterinarias": {
    title: "Los dueños de mascotas confían en veterinarias con buenas reseñas",
    description: "El 78% de los dueños de mascotas leen reseñas antes de elegir veterinaria. Conseguí más reseñas 5 estrellas de clientes satisfechos.",
    cta: "Probar ahora",
    calLink: "https://cal.com/gofidely/demo",
    videoUrl: "https://gofidely.wistia.com/medias/4kufh6ejqv",
    videoTitle: "Mirá cómo funciona",
    niche: "veterinary",
    fbEventParams: {
      content_name: "Landing Veterinarias",
      content_ids: ["veterinarias-reviews"],
      content_type: "product",
      currency: "USD",
    },
    features: [
      { title: "QR en recepción", text: "El cliente escanea al terminar la consulta mientras espera que su mascota se recupere o al pagar." },
      { title: "Por veterinario", text: "Cada profesional puede tener su propio código. Reconocé el trabajo de cada miembro del equipo." },
      { title: "Momento emocional", text: "Capturá la gratitud del cliente cuando su mascota fue bien atendida." },
      { title: "Manejo de casos difíciles", text: "Filtrá feedback de situaciones complicadas antes de que afecten tu reputación." }
    ],
    ctaBlock: { text: "¿Querés ser la veterinaria mejor valorada de la zona?", cta: "Probar ahora" },
    showPricing: true,
    pricingTitle: "Planes para veterinarias",
    pricingSubtitle: "14 días de prueba gratis. Cancelás cuando quieras.",
    pricingTiers: [
      {
        name: "Starter",
        price: "USD 59/mes",
        description: "1 sucursal • 200 reseñas/mes",
        features: [
          "1 veterinaria",
          "200 reseñas/mes",
          "QR por veterinario",
          "Dashboard completo",
          "Filtro de feedback negativo"
        ],
        cta: "14 días gratis"
      },
      {
        name: "Growth",
        price: "USD 119/mes",
        description: "3 sucursales • 800 reseñas/mes",
        features: [
          "3 veterinarias",
          "800 reseñas/mes",
          "QRs ilimitados por veterinario",
          "Ranking por veterinario",
          "Dashboard avanzado",
          "Soporte prioritario"
        ],
        cta: "14 días gratis",
        highlighted: true
      },
      {
        name: "Scale",
        price: "USD 199/mes",
        description: "20 sucursales • Reseñas ilimitadas",
        features: [
          "Hasta 20 sedes",
          "Reseñas ilimitadas",
          "Comparativa entre sedes",
          "Integraciones",
          "Soporte dedicado"
        ],
        cta: "14 días gratis"
      }
    ]
  }
};

export async function getLandingContent(slug: string) {
  return LANDINGS[slug];
}
