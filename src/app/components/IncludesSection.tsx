import { Monitor, Users, Gamepad2, Gift } from "lucide-react";

const includes = [
  {
    icon: Monitor,
    title: "Presencia de Marca",
    description: "Tótem publicitario digital personalizado con la identidad visual de tu marca. Máxima visibilidad en el espacio.",
    color: "#FC0036",
  },
  {
    icon: Users,
    title: "Staff Profesional",
    description: "Edécan profesional y capacitado para guiar a los participantes. (Uniforme a cargo del cliente).",
    color: "#47C9A2",
  },
  {
    icon: Gamepad2,
    title: "Dinámica Interactiva",
    description: "Juego de entretenimiento interactivo diseñado para crear momentos de diversión y conexión con tu marca.",
    color: "#FC0036",
  },
  {
    icon: Gift,
    title: "Logística de Premios",
    description: "Gestión completa de la logística de premios y promocionales. Los artículos son proporcionados por el cliente.",
    color: "#47C9A2",
  },
];

export function IncludesSection() {
  return (
    <section
      id="incluye"
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: "#0a0a0a", fontFamily: "'Montserrat Alternates', sans-serif" }}
    >
      {/* Background decorative elements */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5"
        style={{ backgroundColor: "#47C9A2", filter: "blur(80px)", transform: "translate(30%, -30%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-5"
        style={{ backgroundColor: "#FC0036", filter: "blur(80px)", transform: "translate(-30%, 30%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: content */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
              style={{ backgroundColor: "rgba(71,201,162,0.12)", border: "1px solid rgba(71,201,162,0.25)" }}
            >
              <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#47C9A2", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Todo incluido
              </span>
            </div>

            <h2
              className="text-white mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 900, lineHeight: 1.2 }}
            >
              Todas las activaciones{" "}
              <span style={{ color: "#47C9A2" }}>incluyen:</span>
            </h2>
            <p
              className="mb-10"
              style={{ color: "rgba(255,255,255,0.55)", fontSize: "1rem", lineHeight: 1.7, fontWeight: 400 }}
            >
              Nos encargamos de todo para que tu marca brille. Cada activación viene 
              equipada con todo lo que necesitas para una experiencia de alto impacto.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {includes.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-5 rounded-2xl transition-all duration-300 hover:translate-y-[-2px]"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                      style={{ backgroundColor: `${item.color}20` }}
                    >
                      <Icon size={20} color={item.color} strokeWidth={2} />
                    </div>
                    <h4
                      className="text-white mb-1.5"
                      style={{ fontWeight: 800, fontSize: "0.95rem" }}
                    >
                      {item.title}
                    </h4>
                    <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.82rem", lineHeight: 1.6, fontWeight: 400 }}>
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden" style={{ aspectRatio: "4/5" }}>
              <img
                src="/stand.jpg"
                alt="Activación de marca en stand"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)" }}
              />
            </div>

            

            {/* Accent line */}
            <div
              className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl"
              style={{ backgroundColor: "#47C9A2", opacity: 0.2 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
