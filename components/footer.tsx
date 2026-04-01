"use client";

import { useLanguage } from "./language-context";

export function Footer() {
  const { t } = useLanguage();

  const serviceLinks = [
    { en: "Website Design", es: "Diseno Web" },
    { en: "Social Media", es: "Redes Sociales" },
    { en: "Meta & Google Ads", es: "Meta y Google Ads" },
    { en: "AI Marketing", es: "Marketing con IA" },
    { en: "Local SEO", es: "SEO Local" },
  ];

  return (
    <footer className="pt-14 pb-8 px-[5%]" style={{ background: "var(--navy2)" }}>
      <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr] gap-12 mb-10">
        {/* Brand */}
        <div>
          <div className="font-serif text-2xl font-extrabold text-white mb-3">
            Free<span style={{ color: "var(--gold)" }}>LAN</span>
          </div>
          <p
            className="text-[13px] leading-relaxed"
            style={{ color: "rgba(255,255,255,0.42)" }}
          >
            {t(
              "Digital marketing for businesses in the United States and Latin America. Websites, social media, paid ads, and AI — all in one place, in English and Spanish.",
              "Marketing digital para negocios en Estados Unidos y Latinoamerica. Sitios web, redes sociales, anuncios e IA — todo en un solo lugar, en ingles y espanol."
            )}
          </p>
        </div>

        {/* Services */}
        <div>
          <div
            className="text-[11px] font-bold uppercase tracking-widest mb-4"
            style={{ color: "var(--gold-light)" }}
          >
            {t("Services", "Servicios")}
          </div>
          <ul className="flex flex-col gap-2.5 list-none">
            {serviceLinks.map((link) => (
              <li key={link.en}>
                <a
                  href="#services"
                  className="text-[13px] transition-colors"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--gold-light)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(255,255,255,0.45)";
                  }}
                >
                  {t(link.en, link.es)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div
            className="text-[11px] font-bold uppercase tracking-widest mb-4"
            style={{ color: "var(--gold-light)" }}
          >
            {t("Contact", "Contacto")}
          </div>
          <div
            className="text-[13px] mb-2.5"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            ✉️{" "}
            <a
              href="mailto:RomeroHCTimox@outlook.com"
              className="transition-colors"
              style={{ color: "rgba(255,255,255,0.45)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--gold-light)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(255,255,255,0.45)";
              }}
            >
              RomeroHCTimox@outlook.com
            </a>
          </div>
          <div
            className="text-[13px] mb-2.5"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            📞{" "}
            <a
              href="tel:+19454008937"
              className="transition-colors"
              style={{ color: "rgba(255,255,255,0.45)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--gold-light)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(255,255,255,0.45)";
              }}
            >
              +1 (945) 400-8937
            </a>
          </div>
          <div
            className="text-[13px] mb-3.5"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            💬{" "}
            <a
              href="https://wa.me/19454008937"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors"
              style={{ color: "rgba(255,255,255,0.45)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--gold-light)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(255,255,255,0.45)";
              }}
            >
              WhatsApp
            </a>
          </div>
          <div
            className="text-xs"
            style={{ color: "rgba(255,255,255,0.28)" }}
          >
            {t("English & Spanish · USA & LATAM", "Ingles y Espanol · EE.UU. y LATAM")}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div
        className="pt-6 flex flex-wrap justify-between items-center gap-3"
        style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
      >
        <span className="text-xs" style={{ color: "rgba(255,255,255,0.28)" }}>
          &copy; 2026 FreeLAN.{" "}
          {t("All rights reserved.", "Todos los derechos reservados.")}
        </span>
      </div>
    </footer>
  );
}
