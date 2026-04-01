"use client";

export function StickyButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-[999] flex flex-col gap-2 items-end">
      <a
        href="tel:+19454008937"
        className="flex items-center gap-2 px-5 py-3 rounded-full font-extrabold text-sm transition-transform shadow-lg hover:-translate-y-0.5"
        style={{
          background: "var(--gold)",
          color: "var(--navy)",
          boxShadow: "0 8px 30px rgba(0,0,0,0.22)",
        }}
      >
        📞 <span className="hidden sm:inline">Call Now</span>
      </a>
      <a
        href="https://wa.me/19454008937?text=Hi!%20I%20need%20help%20with%20marketing"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-5 py-3 rounded-full font-extrabold text-sm transition-transform shadow-lg hover:-translate-y-0.5"
        style={{
          background: "#25d366",
          color: "#fff",
          boxShadow: "0 8px 30px rgba(0,0,0,0.22)",
        }}
      >
        💬 <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  );
}
