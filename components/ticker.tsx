"use client";

const tickerItems = [
  "Website Design",
  "Social Media Management",
  "Meta Ads",
  "AI Marketing",
  "Local SEO",
  "Google Ads",
  "Lead Generation",
  "Se Habla Espanol",
];

export function Ticker() {
  return (
    <div className="py-2.5 overflow-hidden" style={{ background: "var(--gold)" }}>
      <div className="flex animate-ticker whitespace-nowrap">
        {/* Double the items for seamless loop */}
        {[...tickerItems, ...tickerItems].map((item, index) => (
          <span
            key={index}
            className="inline-flex items-center gap-3.5 px-7 text-xs font-extrabold tracking-wider uppercase"
            style={{ color: "var(--navy)" }}
          >
            {item}
            <span
              className="w-1 h-1 rounded-full"
              style={{ background: "rgba(13,27,46,0.35)" }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
