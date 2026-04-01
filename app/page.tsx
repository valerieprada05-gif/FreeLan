import { LanguageProvider } from "@/components/language-context";
import { LangBar } from "@/components/lang-bar";
import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { Ticker } from "@/components/ticker";
import { HowItWorks } from "@/components/how-it-works";
import { Industries } from "@/components/industries";
import { Services } from "@/components/services";
import { ContactSection } from "@/components/contact-section";
import { QuoteSection } from "@/components/quote-section";
import { Testimonials } from "@/components/testimonials";
import { BilingualBanner } from "@/components/bilingual-banner";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { StickyButtons } from "@/components/sticky-buttons";

export default function Home() {
  return (
    <LanguageProvider>
      <LangBar />
      <Navigation />
      <main>
        <Hero />
        <Ticker />
        <HowItWorks />
        <Industries />
        <Services />
        <ContactSection />
        <QuoteSection />
        <Testimonials />
        <BilingualBanner />
        <FinalCTA />
      </main>
      <Footer />
      <StickyButtons />
    </LanguageProvider>
  );
}
