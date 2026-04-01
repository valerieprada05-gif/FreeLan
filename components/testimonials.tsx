"use client";

import { useLanguage } from "./language-context";
import { useReveal } from "@/hooks/use-reveal";

const testimonials = [
  {
    tag: "Plumbing · Miami, FL",
    quoteEn:
      '"We went from zero online presence to getting 8-12 calls a week. FreeLAN built our website in 5 days and the ads started working immediately. Best investment I\'ve made for my business."',
    quoteEs:
      '"Pasamos de cero presencia online a recibir 8-12 llamadas por semana. FreeLAN construyo nuestro sitio en 5 dias y los anuncios funcionaron de inmediato."',
    initials: "CR",
    name: "Carlos R.",
    business: "Plumbing Services · Miami, FL",
    spanish: true,
  },
  {
    tag: "Beauty Salon · PA",
    quoteEn:
      '"The monthly reports are clear and you can see the campaigns being optimized. My cost per lead dropped a lot after the second month. Extremely satisfied."',
    quoteEs:
      '"Los reportes mensuales son muy claros. Mi costo por lead bajo mucho despues del segundo mes. Extremadamente satisfecha."',
    initials: "ML",
    name: "Maria L.",
    business: "Beauty Salon · Philadelphia, PA",
    spanish: false,
  },
  {
    tag: "Landscaping · NJ",
    quoteEn:
      '"Super fast. Under a week the site was live. First week we already had 3 new quote requests. They speak Spanish which made everything much easier for me."',
    quoteEs:
      '"Proceso muy rapido. En menos de una semana el sitio estaba en vivo. La primera semana ya teniamos 3 solicitudes. Hablan espanol, lo cual hizo todo mas facil!"',
    initials: "JP",
    name: "Jorge P.",
    business: "Landscaping · Newark, NJ",
    spanish: true,
  },
];

export function Testimonials() {
  const { t } = useLanguage();
  const { ref: headerRef, isVisible: headerVisible } = useReveal();

  return (
    <section id="results" className="py-16 md:py-24 px-[5%]">
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
            {t("Real Results", "Resultados Reales")}
          </div>
          <h2
            className="font-serif text-3xl md:text-4xl font-extrabold tracking-tight leading-tight"
            style={{ color: "var(--navy)" }}
          >
            {t("Business Owners", "Duenos de Negocio")}
            <br />
            {t("Who Chose to Grow", "Que Eligieron Crecer")}
          </h2>
        </div>
        <p
          className="text-base max-w-md leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          {t(
            "Real clients, real cities, real results. All across the United States.",
            "Clientes reales, ciudades reales, resultados reales. En todo Estados Unidos."
          )}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            testimonial={testimonial}
            delay={index}
          />
        ))}
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
  delay,
}: {
  testimonial: (typeof testimonials)[number];
  delay: number;
}) {
  const { t } = useLanguage();
  const { ref, isVisible } = useReveal();

  return (
    <div
      ref={ref}
      className={`reveal d${delay} relative p-7 rounded-2xl overflow-hidden transition-all ${
        isVisible ? "visible" : ""
      }`}
      style={{
        background: "var(--white)",
        border: "1px solid var(--border)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 8px 40px rgba(13,27,46,0.14)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Quote mark background */}
      <span
        className="absolute -top-2 left-4 font-serif text-[100px] leading-none pointer-events-none"
        style={{ color: "var(--gold-pale)" }}
      >
        &quot;
      </span>

      <span
        className="inline-block text-[10px] font-bold px-2.5 py-0.5 rounded mb-3 tracking-wider uppercase"
        style={{
          background: "var(--gold-pale)",
          color: "var(--gold)",
        }}
      >
        {testimonial.tag}
      </span>

      <div
        className="text-sm tracking-wide mb-3"
        style={{ color: "var(--gold)" }}
      >
        ★★★★★
      </div>

      <p
        className="text-sm leading-relaxed mb-5 italic relative"
        style={{ color: "var(--muted)" }}
      >
        {t(testimonial.quoteEn, testimonial.quoteEs)}
      </p>

      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center font-serif text-sm font-extrabold flex-shrink-0"
          style={{
            background: "var(--navy)",
            color: "var(--gold)",
          }}
        >
          {testimonial.initials}
        </div>
        <div>
          <div
            className="text-sm font-bold"
            style={{ color: "var(--navy)" }}
          >
            {testimonial.name}
          </div>
          <div className="text-xs" style={{ color: "var(--muted2)" }}>
            {testimonial.business}
          </div>
          {testimonial.spanish && (
            <div
              className="text-[11px] font-bold mt-0.5"
              style={{ color: "var(--gold)" }}
            >
              Served in Spanish
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
