"use client";

import { useLanguage } from "./language-context";
import { useReveal } from "@/hooks/use-reveal";

const services = [
  {
    num: "01",
    emoji: "🌐",
    titleEn: "Conversion Website",
    titleEs: "Sitio Web de Conversion",
    descEn: "A professional page that turns visitors into customers — not just looks good. Live in 3-7 days.",
    descEs: "Una pagina profesional que convierte visitas en clientes. Lista en 3-7 dias.",
    features: [
      { en: "Works perfectly on phone & desktop", es: "Funciona en movil y computadora" },
      { en: "Call & WhatsApp buttons built-in", es: "Botones de llamada y WhatsApp" },
      { en: "Google Maps integration", es: "Integracion con Google Maps" },
      { en: "Local SEO so Google finds you", es: "SEO local para que Google te encuentre" },
    ],
  },
  {
    num: "02",
    emoji: "📱",
    titleEn: "Social Media Management",
    titleEs: "Redes Sociales",
    descEn: "We manage your Facebook & Instagram so you can focus on your business, not on posting.",
    descEs: "Gestionamos tu Facebook e Instagram para que te enfoques en tu negocio, no en publicar.",
    features: [
      { en: "3-4 posts per week", es: "3-4 publicaciones por semana" },
      { en: "Before/after, testimonials & reels", es: "Antes/despues, testimonios y reels" },
      { en: "Content that gets people to call you", es: "Contenido que hace que te llamen" },
      { en: "Community management & responses", es: "Gestion de comunidad y respuestas" },
    ],
  },
  {
    num: "03",
    emoji: "🎯",
    titleEn: "Paid Ads (Meta & Google)",
    titleEs: "Publicidad (Meta y Google)",
    descEn: "Ads shown to people in your area who are already looking for what you offer.",
    descEs: "Anuncios mostrados a personas en tu zona que ya buscan lo que ofreces.",
    features: [
      { en: "Targeted by city or zip code", es: "Segmentado por ciudad o codigo postal" },
      { en: "Drives direct calls & messages", es: "Genera llamadas y mensajes directos" },
      { en: "Optimized every week", es: "Optimizado cada semana" },
      { en: "Monthly report — you see everything", es: "Reporte mensual — ves todo" },
    ],
  },
  {
    num: "04",
    emoji: "🤖",
    titleEn: "AI-Powered Marketing",
    titleEs: "Marketing con Inteligencia Artificial",
    descEn: "AI tools that respond to leads instantly, write better ads, and keep your business working 24/7 — even when you're sleeping.",
    descEs: "Herramientas de IA que responden leads al instante, escriben mejores anuncios y mantienen tu negocio activo 24/7 — hasta cuando duermes.",
    features: [
      { en: "WhatsApp chatbot answers instantly", es: "Chatbot de WhatsApp responde al instante" },
      { en: "Automated follow-up messages", es: "Mensajes de seguimiento automaticos" },
      { en: "AI writes better ad copy faster", es: "La IA escribe mejores anuncios mas rapido" },
      { en: "Never miss a lead again", es: "Nunca pierdas un lead de nuevo" },
    ],
  },
  {
    num: "05",
    emoji: "📍",
    titleEn: "Local SEO & Google Maps",
    titleEs: "SEO Local y Google Maps",
    descEn: "When someone in your city searches for your service on Google, you show up first — not your competitor.",
    descEs: "Cuando alguien en tu ciudad busca tu servicio en Google, apareces tu primero — no tu competidor.",
    features: [
      { en: "Google Business Profile set up & optimized", es: "Perfil de Google Business optimizado" },
      { en: "Keywords your customers search for", es: "Palabras clave que buscan tus clientes" },
      { en: "Review strategy to build trust", es: "Estrategia de resenas para generar confianza" },
      { en: "Maps visibility — get found locally", es: "Visibilidad en Maps — encuentrate localmente" },
    ],
  },
  {
    num: "06",
    emoji: "📊",
    titleEn: "Monthly Reports",
    titleEs: "Reportes Mensuales",
    descEn: "Every month you get a clear report: how many people saw your ads, how many contacted you, and what we're doing to improve.",
    descEs: "Cada mes recibes un reporte claro: cuantas personas vieron tus anuncios, cuantas te contactaron y que hacemos para mejorar.",
    features: [
      { en: "How many leads came in", es: "Cuantos leads llegaron" },
      { en: "Which ads are working best", es: "Que anuncios funcionan mejor" },
      { en: "What we're improving next month", es: "Que mejoraremos el proximo mes" },
      { en: "Direct access to ask us anything", es: "Acceso directo para preguntarnos lo que sea" },
    ],
  },
];

export function Services() {
  const { t } = useLanguage();
  const { ref: headerRef, isVisible: headerVisible } = useReveal();

  return (
    <section id="services" className="py-16 md:py-24 px-[5%]">
      <div
        ref={headerRef}
        className={`reveal flex flex-wrap justify-between items-end gap-8 mb-14 ${
          headerVisible ? "visible" : ""
        }`}
      >
        <div>
          <div
            className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase mb-3"
            style={{ color: "var(--gold)" }}
          >
            <span
              className="w-4 h-0.5 flex-shrink-0"
              style={{ background: "var(--gold)" }}
            />
            {t("What We Do", "Lo Que Hacemos")}
          </div>
          <h2
            className="font-serif text-3xl md:text-4xl font-extrabold tracking-tight leading-tight"
            style={{ color: "var(--navy)" }}
          >
            {t("Services Built to", "Servicios Para")}
            <br />
            {t("Generate Real Leads", "Generar Leads Reales")}
          </h2>
        </div>
        <p
          className="text-base max-w-md leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          {t(
            "Every service has one goal: bring real potential customers to your phone, inbox, and door.",
            "Cada servicio tiene un objetivo: llevar clientes reales a tu telefono, correo y negocio."
          )}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service, index) => (
          <ServiceCard key={service.num} service={service} delay={index % 3} />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  delay,
}: {
  service: (typeof services)[number];
  delay: number;
}) {
  const { t } = useLanguage();
  const { ref, isVisible } = useReveal();

  return (
    <div
      ref={ref}
      className={`reveal d${delay} p-7 rounded-2xl transition-all duration-300 ${
        isVisible ? "visible" : ""
      }`}
      style={{
        background: "var(--white)",
        border: "1px solid var(--border)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 20px 60px rgba(13,27,46,0.18)";
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.borderColor = "var(--gold)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor = "var(--border)";
      }}
    >
      <div
        className="font-serif text-4xl font-extrabold leading-none mb-3.5"
        style={{ color: "var(--gold-pale)" }}
      >
        {service.num}
      </div>
      <div className="text-2xl mb-3">{service.emoji}</div>
      <h3
        className="font-serif text-lg font-extrabold leading-snug mb-2"
        style={{ color: "var(--navy)" }}
      >
        {t(service.titleEn, service.titleEs)}
      </h3>
      <p
        className="text-sm leading-relaxed mb-4"
        style={{ color: "var(--muted)" }}
      >
        {t(service.descEn, service.descEs)}
      </p>
      <ul className="flex flex-col gap-2 list-none mb-4">
        {service.features.map((feature, i) => (
          <li
            key={i}
            className="text-[13px] leading-relaxed flex items-start gap-2"
            style={{ color: "var(--text)" }}
          >
            <span
              className="flex-shrink-0 mt-0.5 font-extrabold"
              style={{ color: "var(--gold)" }}
            >
              ✓
            </span>
            {t(feature.en, feature.es)}
          </li>
        ))}
      </ul>
      <a
        href="#quote-form"
        className="inline-flex items-center gap-1.5 text-[13px] font-bold transition-all cursor-pointer"
        style={{ color: "var(--gold)" }}
        onMouseEnter={(e) => {
          e.currentTarget.style.gap = "10px";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.gap = "6px";
        }}
      >
        {t("Request quote", "Solicitar cotizacion")} &rarr;
      </a>
    </div>
  );
}
