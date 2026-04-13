import { Monitor, Zap, Activity } from "lucide-react";

const activations = [
  {
    id: "neuro-challenge",
    name: "Neuro-Challenge",
    icon: Monitor,
    accent: "#47C9A2",
    description:
      "Pantalla táctil adaptable para ruleta con premios o memoría. Incluye branding de la marca tanto en el mupie como la personalización del juego.",
    details: ["Ruleta con premios", "Juego de memoría", "Branding personalizado en el tótem", "Interfaz totalmente customizable"],
    image: "/neuro-challenge.jpg", // <-- Reemplaza con el nombre de tu imagen
  },
  {
    id: "zona-reaccion",
    name: "Zona de Reacción",
    icon: Activity,
    accent: "#FC0036",
    description:
      "Pelotas o barras que caen de forma aleatoria, gana el usuario que logre atrapar todas. Incluye branding de la marca.",
    details: ["Dinámica de captura en tiempo real", "Niveles de dificultad ajustables", "Branding completo de la marca", "Competitivo y divertido"],
    image: "/zona-reaccion.jpg", // <-- Reemplaza con el nombre de tu imagen
  },
  {
    id: "energy-rush",
    name: "Energy-Rush",
    icon: Zap,
    accent: "#FC0036",
    description:
      "Piso táctil que va cargando la batería de la pantalla según la velocidad del usuario. Pon a prueba tu energía.",
    details: ["Piso táctil interactivo", "Medición de velocidad en tiempo real", "Pantalla con barra de energía", "Branding de la marca incluido"],
    image: "/energy-rush.jpg", // <-- Reemplaza con el nombre de tu imagen
  },
];

export function ActivationsSection() {
  return (
    <section
      id="activaciones"
      className="py-24 bg-white"
      style={{ fontFamily: "'Montserrat Alternates', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4"
            style={{ backgroundColor: "rgba(252,0,54,0.08)", border: "1px solid rgba(252,0,54,0.2)" }}
          >
            <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#FC0036", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Nuestras Activaciones
            </span>
          </div>
          <h2
            style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 900, color: "#000", lineHeight: 1.2 }}
          >
            Experiencias que generan{" "}
            <span style={{ color: "#FC0036" }}>impacto</span>
          </h2>
          <p
            className="mt-4 max-w-2xl mx-auto"
            style={{ color: "#666", fontSize: "1.05rem", lineHeight: 1.7, fontWeight: 400 }}
          >
            Cada activación se diseña para conectar emocionalmente con los colaboradores, 
            generar recordación de marca y crear momentos memorables.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {activations.map((act) => {
            const Icon = act.icon;
            return (
              <div
                key={act.id}
                className="group rounded-3xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                style={{ border: "1.5px solid rgba(0,0,0,0.08)", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
              >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={act.image}
                    alt={act.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(to top, ${act.accent}33 0%, transparent 60%)` }}
                  />
                  {/* Accent badge */}
                  <div
                    className="absolute top-4 left-4 p-2.5 rounded-xl"
                    style={{ backgroundColor: act.accent }}
                  >
                    <Icon size={18} color="white" strokeWidth={2.5} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <h3
                    style={{ fontSize: "1.3rem", fontWeight: 900, color: "#000", marginBottom: 8 }}
                  >
                    {act.name}
                  </h3>
                  <p
                    style={{ color: "#555", fontSize: "0.9rem", lineHeight: 1.6, fontWeight: 400 }}
                    className="mb-5"
                  >
                    {act.description}
                  </p>

                  {/* Details list */}
                  <ul className="space-y-2 mb-6 flex-1">
                    {act.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2.5">
                        <div
                          className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                          style={{ backgroundColor: act.accent }}
                        />
                        <span style={{ fontSize: "0.85rem", color: "#444", fontWeight: 500 }}>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  
                </div>
              </div>
            );
          })}
        </div>

        {/* Schedule note */}
        <div
          className="mt-12 p-6 rounded-2xl text-center"
          style={{ backgroundColor: "#f7f7f7", border: "1.5px solid rgba(0,0,0,0.06)" }}
        >
          <p style={{ color: "#555", fontSize: "0.95rem", fontWeight: 500 }}>
            <span style={{ fontWeight: 800, color: "#000" }}>Duración:</span> Activación semanal de{" "}
            <span style={{ color: "#FC0036", fontWeight: 800 }}>3 horas c/u</span> en un periodo de un mes ·{" "}
            <span style={{ fontWeight: 800, color: "#000" }}>12 horas totales al mes</span> · Compra sugerida:{" "}
            <span style={{ color: "#47C9A2", fontWeight: 800 }}>3 meses</span> para mejores resultados
          </p>
        </div>
      </div>
    </section>
  );
}
