"use client";

import { useLanguage } from "./language-context";
import { useReveal } from "@/hooks/use-reveal";

const industries = [
  { icon: "🔨", nameEn: "Construction & Remodeling", nameEs: "Construccion y Remodelacion", sub: "Contractors · Builders" },
  { icon: "🔧", nameEn: "Plumbing & HVAC", nameEs: "Plomeria y HVAC", sub: "Home Services · Electrical" },
  { icon: "🍽️", nameEn: "Restaurants & Food", nameEs: "Restaurantes y Comida", sub: "Cafes · Catering · Food Trucks" },
  { icon: "💇", nameEn: "Beauty & Wellness", nameEs: "Belleza y Bienestar", sub: "Salons · Spas · Barbershops" },
  { icon: "🌿", nameEn: "Landscaping & Cleaning", nameEs: "Landscaping y Limpieza", sub: "Lawn Care · Pressure Washing" },
  { icon: "⚖️", nameEn: "Professional Services", nameEs: "Servicios Profesionales", sub: "Lawyers · Accountants" },
  { icon: "🏥", nameEn: "Medical & Dental", nameEs: "Medico y Dental", sub: "Clinics · Specialists" },
  { icon: "🛒", nameEn: "Retail & E-Commerce", nameEs: "Tiendas y E-Commerce", sub: "Stores · Online Shops" },
  { icon: "🚗", nameEn: "Auto & Transportation", nameEs: "Automotriz y Transporte", sub: "Shops · Detailing · Towing" },
  { icon: "🎓", nameEn: "Education & Coaching", nameEs: "Educacion y Coaching", sub: "Tutors · Trainers · Courses" },
  { icon: "🏋️", nameEn: "Fitness & Sports", nameEs: "Fitness y Deportes", sub: "Gyms · Studios · Trainers" },
  { icon: "✨", nameEn: "Any Local Business", nameEs: "Cualquier Negocio Local", subEn: "If you serve clients, we help you grow", subEs: "Si atiendes clientes, te ayudamos", highlight: true },
];

export function Industries() {
  const { t } = useLanguage();
  const { ref: headerRef, isVisible: headerVisible } = useReveal();

  return (
    <section
      id="industries"
      className="py-16 md:py-24 px-[5%]"
      style={{ background: "var(--off)" }}
    >
      <div
        ref={headerRef}
        className={`reveal text-center max-w-xl mx-auto mb-12 ${
          headerVisible ? "visible" : ""
        }`}
      >
        <div
          className="inline-flex items-center justify-center gap-2 text-[11px] font-bold tracking-widest uppercase mb-3"
          style={{ color: "var(--gold)" }}
        >
          <span
            className="w-4 h-0.5 flex-shrink-0"
            style={{ background: "var(--gold)" }}
          />
          {t("We work with every type of business", "Trabajamos con todo tipo de negocio")}
        </div>
        <h2
          className="font-serif text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-3.5"
          style={{ color: "var(--navy)" }}
        >
          {t("Your Industry. Our Expertise.", "Tu Industria. Nuestra Experiencia.")}
        </h2>
        <p
          className="text-base max-w-lg mx-auto leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          {t(
            "From local contractors to restaurants — if you have customers, we can bring you more.",
            "Desde contratistas locales hasta restaurantes — si tienes clientes, podemos traerte mas."
          )}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
        {industries.map((ind, index) => (
          <IndustryCard key={index} industry={ind} delay={index % 3} />
        ))}
      </div>
    </section>
  );
}

function IndustryCard({
  industry,
  delay,
}: {
  industry: (typeof industries)[number];
  delay: number;
}) {
  const { t } = useLanguage();
  const { ref, isVisible } = useReveal();

  return (
    <div
      ref={ref}
      className={`reveal d${delay} text-center px-4 py-5 rounded-xl transition-all duration-300 cursor-default ${
        isVisible ? "visible" : ""
      }`}
      style={{
        background: industry.highlight ? "var(--gold-pale)" : "var(--white)",
        border: industry.highlight
          ? "1px solid var(--gold)"
          : "1px solid var(--border)",
      }}
      onMouseEnter={(e) => {
        if (!industry.highlight) {
          e.currentTarget.style.borderColor = "var(--gold)";
          e.currentTarget.style.boxShadow = "0 8px 40px rgba(13,27,46,0.14)";
          e.currentTarget.style.transform = "translateY(-3px)";
        }
      }}
      onMouseLeave={(e) => {
        if (!industry.highlight) {
          e.currentTarget.style.borderColor = "var(--border)";
          e.currentTarget.style.boxShadow = "none";
          e.currentTarget.style.transform = "translateY(0)";
        }
      }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mx-auto mb-3 transition-colors"
        style={{ background: industry.highlight ? "var(--white)" : "var(--off)" }}
      >
        {industry.icon}
      </div>
      <div
        className="text-[13px] font-bold leading-snug"
        style={{ color: "var(--navy)" }}
      >
        {t(industry.nameEn, industry.nameEs)}
      </div>
      <div className="text-[11px] mt-1" style={{ color: "var(--muted2)" }}>
        {industry.subEn
          ? t(industry.subEn, industry.subEs || "")
          : industry.sub}
      </div>
    </div>
  );
}
