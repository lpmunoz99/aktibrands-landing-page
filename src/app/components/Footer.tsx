import { AktiBrandsLogo } from "./AktiBrandsLogo";
import { Instagram, Facebook } from "lucide-react";

const footerLinks = [
  {
    title: "Activaciones",
    links: ["Neuro-Challenge", "Zona de Reacción", "Energy-Rush"],
  },
  {
    title: "Empresa",
    links: ["¿Qué incluye?", "Condiciones Comerciales"],
  },
  {
    title: "Contacto",
    links: ["administracion@aktibrands.com", "Guatemala", "Cotizar ahora"],
  },
];

export function Footer() {
  return (
    <footer
      style={{ backgroundColor: "#050505", fontFamily: "'Montserrat Alternates', sans-serif", borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand column */}
          <div className="md:col-span-1">
            <AktiBrandsLogo size={40} variant="color" showText horizontal />
            <p
              className="mt-5"
              style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem", lineHeight: 1.7, fontWeight: 400 }}
            >
              Activaciones de alto impacto que conectan marcas con personas. 
              Experiencias interactivas que generan recordación real.
            </p>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              {[Instagram, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:opacity-70"
                  style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
                >
                  <Icon size={16} color="rgba(255,255,255,0.6)" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4
                style={{ fontSize: "0.8rem", fontWeight: 800, color: "rgba(255,255,255,0.9)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16 }}
              >
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem", fontWeight: 400, transition: "color 0.2s" }}
                      className="hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.3)", fontWeight: 400 }}>
            © 2026 AktiBrands. Todos los derechos reservados.
          </p>
          
        </div>
      </div>
    </footer>
  );
}
