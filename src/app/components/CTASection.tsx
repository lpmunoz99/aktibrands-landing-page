import { Mail, Phone, ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section
      id="contacto"
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: "#0a0a0a", fontFamily: "'Montserrat Alternates', sans-serif" }}
    >
      {/* Background decorative elements */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: "radial-gradient(ellipse 60% 60% at 20% 50%, #FC0036, transparent), radial-gradient(ellipse 50% 50% at 80% 50%, #47C9A2, transparent)",
        }}
      />

      {/* Diamond decorations */}
      <div
        className="absolute top-1/2 left-1/4 w-40 h-40 opacity-5"
        style={{ backgroundColor: "#47C9A2", transform: "translate(-50%, -50%) rotate(45deg)", borderRadius: 16 }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-24 h-24 opacity-5"
        style={{ backgroundColor: "#FC0036", transform: "translate(50%, -50%) rotate(45deg)", borderRadius: 10 }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8"
          style={{ backgroundColor: "rgba(252,0,54,0.15)", border: "1px solid rgba(252,0,54,0.3)" }}
        >
          <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#FC0036" }} />
          <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#FC0036", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Hablemos
          </span>
        </div>

        <h2
          className="text-white mb-6"
          style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 900, lineHeight: 1.15 }}
        >
          ¿Listo para activar tu marca{" "}
          <span style={{ color: "#FC0036" }}>con impacto real?</span>
        </h2>

        <p
          className="mb-12 mx-auto max-w-2xl"
          style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.1rem", lineHeight: 1.7, fontWeight: 400 }}
        >
          Contáctanos hoy y diseñemos juntos la activación perfecta para tu marca. 
          Nuestro equipo está listo para crear una experiencia memorable.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="mailto:administracion@aktibrands.com"
            className="group flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white transition-all hover:opacity-90 cursor-pointer"
            style={{ backgroundColor: "#FC0036", fontWeight: 700, fontSize: "1rem" }}
          >
            <Mail size={18} />
            Enviar correo
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Contact info cards */}
        <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          {[
            { label: "Email", value: "administracion@aktibrands.com", icon: "✉️" },
            { label: "Respuesta", value: "En menos de 24h", icon: "⚡" },
            { label: "Ubicación", value: "Guatemala", icon: "📍" },
          ].map((item) => (
            <div
              key={item.label}
              className="p-4 rounded-2xl text-center"
              style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <div style={{ fontSize: "1.5rem", marginBottom: 6 }}>{item.icon}</div>
              <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                {item.label}
              </div>
              <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.8)", fontWeight: 600, marginTop: 4 }}>
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
