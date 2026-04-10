import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ActivationsSection } from "./components/ActivationsSection";
import { IncludesSection } from "./components/IncludesSection";
import { CommercialSection } from "./components/CommercialSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Montserrat Alternates', sans-serif" }}>
      <Navbar />
      <Hero />
      <ActivationsSection />
      <IncludesSection />
      <CommercialSection />
      <CTASection />
      <Footer />
    </div>
  );
}
