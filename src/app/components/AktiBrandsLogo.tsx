interface AktiBrandsLogoProps {
  variant?: "color" | "white";
  size?: number;        // Este controlará la imagen
  textSize?: number;    // Nueva prop opcional para el texto
  showText?: boolean;
  horizontal?: boolean;
}

export function AktiBrandsLogo({
  variant = "color",
  size = 48,
  textSize, // Si no se pasa, usaremos un valor fijo
  showText = true,
  horizontal = false,
}: AktiBrandsLogoProps) {
  
  const logoSrc = "/logo-aktibrands (2).svg";

  // Definimos un tamaño de texto que no dependa obligatoriamente de 'size'
  // Si no pasas 'textSize', se queda en 22px (o lo que prefieras)
  const finalFontSize = textSize || 22; 

  return (
    <div className={`flex items-center ${horizontal ? "flex-row" : "flex-col"} gap-3`}>
      <img 
        src={logoSrc} 
        alt="AktiBrands Logo" 
        style={{ 
          height: `${size}px`, 
          width: 'auto' 
        }} 
        className="object-contain"
      />
      
      {showText && (
        <span
          style={{
            color: variant === "white" ? "#ffffff" : "#000000",
            fontSize: `${finalFontSize}px`, // Usamos el tamaño fijo o la nueva prop
            lineHeight: 1,
            fontFamily: "'Montserrat Alternates', sans-serif",
            letterSpacing: "-0.01em",
          }}
        >
          <span style={{ fontStyle: "italic", fontWeight: 900 }}>Akti</span>
          <span style={{ fontWeight: 700 }}>Brands</span>
        </span>
      )}
    </div>
  );
}