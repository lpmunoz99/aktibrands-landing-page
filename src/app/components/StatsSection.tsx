import { Users, Calendar, TrendingUp, Target } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "14,000",
    label: "Colaboradores",
    sublabel: "Alcance total en Telus Digital",
    color: "#47C9A2",
  },
  {
    icon: Calendar,
    value: "18–30",
    label: "Años",
    sublabel: "Rango de edades del target",
    color: "#FC0036",
  },
  {
    icon: TrendingUp,
    value: "D/C+",
    label: "NSE",
    sublabel: "Nivel Socioeconómico",
    color: "#47C9A2",
  },
  {
    icon: Target,
    value: "12h",
    label: "Al mes",
    sublabel: "Horas de activación mensual",
    color: "#FC0036",
  },
];

export function StatsSection() {
  return (
    <section
      id="alcance"
      className="py-24 bg-white"
      style={{ fontFamily: "'Montserrat Alternates', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4"
            style={{ backgroundColor: "rgba(71,201,162,0.1)", border: "1px solid rgba(71,201,162,0.25)" }}
          >
            <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#47C9A2", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Target & Alcance
            </span>
          </div>
          <h2
            style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 900, color: "#000", lineHeight: 1.2 }}
          >
            Proyección de{" "}
            <span style={{ color: "#47C9A2" }}>alcance real</span>
          </h2>
          <p
            className="mt-4 max-w-xl mx-auto"
            style={{ color: "#666", fontSize: "1rem", lineHeight: 1.7, fontWeight: 400 }}
          >
            Tu marca en contacto directo con miles de colaboradores activos, 
            en el rango de edad ideal para conexiones genuinas.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="relative p-7 rounded-3xl overflow-hidden group hover:-translate-y-1 transition-all duration-300"
                style={{ border: "1.5px solid rgba(0,0,0,0.07)", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}
              >
                {/* Background accent */}
                <div
                  className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-5 group-hover:opacity-10 transition-opacity"
                  style={{ backgroundColor: stat.color }}
                />

                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${stat.color}15` }}
                >
                  <Icon size={22} color={stat.color} strokeWidth={2} />
                </div>

                <div
                  style={{ fontSize: "2.5rem", fontWeight: 900, color: stat.color, lineHeight: 1 }}
                >
                  {stat.value}
                </div>
                <div
                  style={{ fontSize: "1rem", fontWeight: 800, color: "#000", marginTop: 6 }}
                >
                  {stat.label}
                </div>
                <div
                  style={{ fontSize: "0.8rem", color: "#888", fontWeight: 400, marginTop: 3 }}
                >
                  {stat.sublabel}
                </div>
              </div>
            );
          })}
        </div>

        {/* Telus Digital context banner */}
        <div
          className="relative p-10 rounded-3xl overflow-hidden"
          style={{ backgroundColor: "#0a0a0a" }}
        >
          {/* Background decorative */}
          <div
            className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10"
            style={{ background: "linear-gradient(135deg, #47C9A2, #FC0036)" }}
          />

          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#47C9A2", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>
                Activación en
              </div>
              <h3
                className="text-white"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: 12 }}
              >
                Telus Digital —<br />
                <span style={{ color: "#FC0036" }}>Presencia garantizada</span>
              </h3>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.95rem", lineHeight: 1.7, fontWeight: 400 }}>
                Posiciona tu marca dentro de las instalaciones de Telus Digital y llega 
                directamente a sus más de 14,000 colaboradores con experiencias que impactan.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Activaciones semanales", value: "4 / mes" },
                { label: "Horas totales", value: "12h / mes" },
                { label: "Recomendado", value: "3 meses" },
                { label: "Modalidad", value: "Continua o en oleadas" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-4 rounded-xl"
                  style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <div style={{ fontSize: "1.1rem", fontWeight: 900, color: "white", lineHeight: 1.2 }}>
                    {item.value}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.45)", fontWeight: 500, marginTop: 4 }}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
