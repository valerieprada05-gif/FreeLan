"use client";

import { useReveal } from "@/hooks/use-reveal";
import { QuoteForm } from "./quote-form";

export function QuoteSection() {
  const { ref, isVisible } = useReveal();

  return (
    <section
      id="quote-form"
      className="py-16 md:py-24 px-[5%]"
      style={{ background: "var(--off)" }}
    >
      <div
        ref={ref}
        className={`reveal max-w-3xl mx-auto ${isVisible ? "visible" : ""}`}
      >
        <QuoteForm standalone />
      </div>
    </section>
  );
}
