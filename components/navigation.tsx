"use client";

import { useState } from "react";
import { useLanguage } from "./language-context";

export function Navigation() {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#how", en: "How It Works", es: "Como Funciona" },
    { href: "#services", en: "Services", es: "Servicios" },
    { href: "#results", en: "Results", es: "Resultados" },
    { href: "#quote-form", en: "Get a Quote", es: "Cotizacion" },
  ];

  return (
    <>
      <nav
        className="sticky top-0 z-50 backdrop-blur-md border-b"
        style={{
          background: "rgba(250,249,246,0.96)",
          borderColor: "var(--border)",
        }}
      >
        <div className="flex items-center justify-between h-[66px] px-[5%]">
          <a
            href="#"
            className="font-serif text-2xl font-extrabold"
            style={{ color: "var(--navy)" }}
          >
            Free<span style={{ color: "var(--gold)" }}>LAN</span>
          </a>

          <ul className="hidden md:flex gap-7 list-none">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-semibold transition-colors hover:text-[var(--navy)]"
                  style={{ color: "var(--muted)" }}
                >
                  {t(link.en, link.es)}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#quote-form"
            className="hidden md:inline-flex px-6 py-2.5 rounded-md text-sm font-bold transition-all border-2"
            style={{
              background: "var(--navy)",
              color: "var(--white)",
              borderColor: "var(--navy)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--gold)";
              e.currentTarget.style.borderColor = "var(--gold)";
              e.currentTarget.style.color = "var(--navy)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--navy)";
              e.currentTarget.style.borderColor = "var(--navy)";
              e.currentTarget.style.color = "var(--white)";
            }}
          >
            {t("Free Quote", "Cotizacion Gratis")}
          </a>

          <button
            className="md:hidden flex flex-col gap-1.5 cursor-pointer bg-transparent border-none p-1"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <span
              className="w-6 h-0.5 block rounded-sm"
              style={{ background: "var(--navy)" }}
            />
            <span
              className="w-6 h-0.5 block rounded-sm"
              style={{ background: "var(--navy)" }}
            />
            <span
              className="w-6 h-0.5 block rounded-sm"
              style={{ background: "var(--navy)" }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[999] flex-col justify-center items-center gap-8 ${
          mobileMenuOpen ? "flex" : "hidden"
        }`}
        style={{ background: "var(--navy)" }}
      >
        <button
          className="absolute top-6 right-[5%] text-white text-3xl cursor-pointer bg-transparent border-none"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          &times;
        </button>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="font-serif text-2xl font-bold text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t(link.en, link.es)}
          </a>
        ))}
      </div>
    </>
  );
}
