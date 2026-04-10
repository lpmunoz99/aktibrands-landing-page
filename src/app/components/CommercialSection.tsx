import { FileText, CreditCard, CheckCircle2 } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: FileText,
    title: "Orden de Compra",
    description: "Emisión de la orden de compra de parte de tu empresa para iniciar el proceso de contratación.",
    color: "#FC0036",
  },
  {
    step: "02",
    icon: CreditCard,
    title: "Pago Inicial (50%)",
    description: "Pago del 50% de la activación, 10 días antes de iniciar. Esto asegura la reserva de tu fecha.",
    color: "#47C9A2",
  },
  {
    step: "03",
    icon: CheckCircle2,
    title: "Pago Final (50%)",
    description: "El restante 50% se solicita 8 días después de finalizado el mes de activación.",
    color: "#FC0036",
  },
];

export function CommercialSection() {
  return (
    <section
      id="condiciones"
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: "#f7f7f7", fontFamily: "'Montserrat Alternates', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4"
            style={{ backgroundColor: "rgba(252,0,54,0.08)", border: "1px solid rgba(252,0,54,0.2)" }}
          >
            <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#FC0036", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Condiciones Comerciales
            </span>
          </div>
          <h2
            style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 900, color: "#000", lineHeight: 1.2 }}
          >
            Proceso simple y{" "}
            <span style={{ color: "#FC0036" }}>transparente</span>
          </h2>
          <p
            className="mt-4 max-w-xl mx-auto"
            style={{ color: "#666", fontSize: "1rem", lineHeight: 1.7, fontWeight: 400 }}
          >
            Tres pasos claros para comenzar a activar tu marca con nosotros. 
            Sin complicaciones, con total flexibilidad.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 relative">
          {/* Connecting line */}
          <div
            className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5"
            style={{ backgroundColor: "rgba(0,0,0,0.08)" }}
          />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step number circle */}
                <div
                  className="relative w-24 h-24 rounded-full flex flex-col items-center justify-center mb-6 z-10"
                  style={{ backgroundColor: step.color, boxShadow: `0 8px 32px ${step.color}40` }}
                >
                  <Icon size={28} color="white" strokeWidth={2} />
                  <div
                    className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-white"
                    style={{ backgroundColor: "#0a0a0a", fontSize: "0.7rem", fontWeight: 900 }}
                  >
                    {step.step}
                  </div>
                </div>

                <h3
                  style={{ fontSize: "1.1rem", fontWeight: 800, color: "#000", marginBottom: 10 }}
                >
                  {step.title}
                </h3>
                <p
                  style={{ color: "#666", fontSize: "0.88rem", lineHeight: 1.6, fontWeight: 400, maxWidth: 260 }}
                >
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Payment summary */}
        <div className="grid md:grid-cols-2 gap-6">
          <div
            className="p-7 rounded-2xl"
            style={{ backgroundColor: "white", border: "1.5px solid rgba(0,0,0,0.06)", boxShadow: "0 4px 20px rgba(0,0,0,0.04)" }}
          >
            <div
              className="text-xs font-bold mb-2 uppercase tracking-wider"
              style={{ color: "#FC0036" }}
            >
              Primer pago
            </div>
            <div style={{ fontSize: "2.2rem", fontWeight: 900, color: "#000", lineHeight: 1 }}>
              50%
            </div>
            <div style={{ fontSize: "0.9rem", color: "#666", fontWeight: 500, marginTop: 8 }}>
              10 días antes de iniciar la activación
            </div>
          </div>

          <div
            className="p-7 rounded-2xl"
            style={{ backgroundColor: "white", border: "1.5px solid rgba(0,0,0,0.06)", boxShadow: "0 4px 20px rgba(0,0,0,0.04)" }}
          >
            <div
              className="text-xs font-bold mb-2 uppercase tracking-wider"
              style={{ color: "#47C9A2" }}
            >
              Segundo pago
            </div>
            <div style={{ fontSize: "2.2rem", fontWeight: 900, color: "#000", lineHeight: 1 }}>
              50%
            </div>
            <div style={{ fontSize: "0.9rem", color: "#666", fontWeight: 500, marginTop: 8 }}>
              8 días después de finalizado el mes
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
