import { useState } from "react";
import { AktiBrandsLogo } from "./AktiBrandsLogo";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Activaciones", href: "#activaciones" },
  { label: "¿Qué incluye?", href: "#incluye" },
  { label: "Condiciones", href: "#condiciones" },
  { label: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNav = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b"
      style={{ borderColor: "rgba(0,0,0,0.08)", fontFamily: "'Montserrat Alternates', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <AktiBrandsLogo size={80} showText horizontal />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href)}
              className="text-sm text-gray-700 hover:text-black transition-colors cursor-pointer"
              style={{ fontWeight: 600 }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("#contacto")}
            className="px-5 py-2 rounded-full text-sm text-white transition-all hover:opacity-90 cursor-pointer"
            style={{ backgroundColor: "#FC0036", fontWeight: 700 }}
          >
            Cotizar ahora
          </button>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href)}
              className="text-left text-sm text-gray-700 hover:text-black py-1 cursor-pointer"
              style={{ fontWeight: 600 }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("#contacto")}
            className="mt-2 px-5 py-2.5 rounded-full text-sm text-white text-center cursor-pointer"
            style={{ backgroundColor: "#FC0036", fontWeight: 700 }}
          >
            Cotizar ahora
          </button>
        </div>
      )}
    </header>
  );
}
