"use client";

import { useState, useEffect } from "react";
import { Menu, X, PawPrint } from "lucide-react";
import { cn } from "@/app/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#servicios", label: "Servicios" },
    { href: "#como-funciona", label: "Cómo Funciona" },
    { href: "#contacto", label: "Contactar" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "glass-effect shadow-lg py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-popoteja-orange to-popoteja-orange-dark rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <PawPrint className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-slate-800 leading-tight">
                Popoteja
              </span>
              <span className="text-[10px] text-popoteja-teal font-medium tracking-wider uppercase">
                Taxi para Mascotas
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-600 hover:text-popoteja-orange font-medium transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-popoteja-orange transition-all group-hover:w-full" />
              </a>
            ))}
            <a
              href="https://wa.me/51999999999?text=Hola%20Popoteja!%20Quiero%20solicitar%20un%20viaje%20para%20mi%20mascota"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-popoteja-orange to-popoteja-orange-dark text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              Reservar Ahora
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-200 pt-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-slate-600 hover:text-popoteja-orange font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/51999999999?text=Hola%20Popoteja!%20Quiero%20solicitar%20un%20viaje%20para%20mi%20mascota"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-r from-popoteja-orange to-popoteja-orange-dark text-white px-6 py-3 rounded-full font-semibold text-center shadow-lg"
            >
              Reservar por WhatsApp
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
