import { AktiBrandsLogo } from "./AktiBrandsLogo";

// Decorative diamond shape for backgrounds
function DiamondDecor({
  color,
  size,
  style,
  opacity = 1,
}: {
  color: string;
  size: number;
  style?: React.CSSProperties;
  opacity?: number;
}) {
  return (
    <div
      style={{
        position: "absolute",
        width: size,
        height: size,
        backgroundColor: color,
        borderRadius: size * 0.12,
        transform: "rotate(45deg)",
        opacity,
        ...style,
      }}
    />
  );
}

export function Hero() {
  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      style={{ backgroundColor: "#0a0a0a", fontFamily: "'Montserrat Alternates', sans-serif" }}
    >
      {/* Background decorative diamonds */}
      <DiamondDecor color="#FC0036" size={300} style={{ top: -80, right: -80 }} opacity={0.15} />
      <DiamondDecor color="#47C9A2" size={200} style={{ top: 60, right: 180 }} opacity={0.1} />
      <DiamondDecor color="#FC0036" size={150} style={{ bottom: 40, right: 320 }} opacity={0.12} />
      <DiamondDecor color="#47C9A2" size={400} style={{ bottom: -120, left: -120 }} opacity={0.07} />
      <DiamondDecor color="#ffffff" size={80} style={{ top: 200, left: 40 }} opacity={0.04} />

      {/* Red accent bar at top */}
      <div
        className="absolute top-16 left-0 right-0 h-1"
        style={{ background: "linear-gradient(90deg, #FC0036 0%, #47C9A2 100%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-16 items-center">
        {/* Left: content */}
        <div>
          {/* Partner badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{ backgroundColor: "rgba(252,0,54,0.15)", border: "1px solid rgba(252,0,54,0.3)" }}
          >
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#FC0036" }} />
            <span className="text-sm text-white/80" style={{ fontWeight: 600 }}>
              <span style={{ color: "#FC0036" }}>Conócenos</span>
            </span>
          </div>

          <h1
            className="text-white mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 900, lineHeight: 1.1 }}
          >
            Activaciones de{" "}
            <span style={{ color: "#FC0036" }}>alto impacto</span>{" "}
            para tu marca.
          </h1>

          <p
            className="mb-10"
            style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.1rem", lineHeight: 1.7, fontWeight: 400 }}
          >
            Conectamos tu marca a través de experiencias interactivas, dinámicas y de entretenimiento que generan
            impacto real y recordación de marca.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => handleScroll("#activaciones")}
              className="px-8 py-3.5 rounded-full text-white transition-all hover:opacity-90 cursor-pointer"
              style={{ backgroundColor: "#FC0036", fontWeight: 700, fontSize: "1rem" }}
            >
              Ver activaciones
            </button>
            <button
              onClick={() => handleScroll("#contacto")}
              className="px-8 py-3.5 rounded-full transition-all hover:bg-white/10 cursor-pointer"
              style={{
                border: "2px solid rgba(255,255,255,0.3)",
                color: "white",
                fontWeight: 600,
                fontSize: "1rem",
              }}
            >
              Contactar
            </button>
          </div>

          {/* Stats row */}
          <div className="mt-12 pt-8 border-t flex gap-10 flex-wrap" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
            {[
              { value: "3", label: "Activaciones únicas" },
              { value: "12h", label: "Al mes" },
            ].map((stat) => (
              <div key={stat.label}>
                <div style={{ fontSize: "2rem", fontWeight: 900, color: "#47C9A2", lineHeight: 1 }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", fontWeight: 500, marginTop: 4 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: logo display */}
        
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,80 L0,40 Q360,0 720,40 Q1080,80 1440,40 L1440,80 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
