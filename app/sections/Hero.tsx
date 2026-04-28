"use client";

import { motion } from "framer-motion";
import { Heart, Shield, Clock, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-popoteja-orange/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-popoteja-teal/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-popoteja-cream/50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-popoteja-orange/10 text-popoteja-orange-dark px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Heart className="w-4 h-4 fill-current" />
              Servicio en Lima y Callao
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
              Tu mejor amigo,{" "}
              <span className="gradient-text italic">en las mejores manos</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
              Transporte seguro y confiable para perros y gatos. Desde el veterinario 
              hasta el grooming, nosotros los cuidamos en cada kilómetro.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#contacto"
                className="group bg-gradient-to-r from-popoteja-orange to-popoteja-orange-dark text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                Solicitar Viaje
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://wa.me/51999999999?text=Hola%20Popoteja!%20Quiero%20más%20información"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-slate-700 border-2 border-slate-200 px-8 py-4 rounded-full font-bold text-lg hover:border-popoteja-orange hover:text-popoteja-orange transition-all flex items-center justify-center"
              >
                WhatsApp
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-slate-600">
                <div className="w-10 h-10 bg-popoteja-teal/10 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-popoteja-teal" />
                </div>
                <span className="text-sm font-medium">100% Seguro</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <div className="w-10 h-10 bg-popoteja-orange/10 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-popoteja-orange" />
                </div>
                <span className="text-sm font-medium">Puntualidad Garantizada</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <div className="w-10 h-10 bg-popoteja-cream-dark/50 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-popoteja-orange-dark" />
                </div>
                <span className="text-sm font-medium">Amantes de los Animales</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative bg-gradient-to-br from-popoteja-cream to-white rounded-3xl p-8 shadow-2xl">
                <div className="aspect-square bg-gradient-to-br from-popoteja-orange/20 to-popoteja-teal/20 rounded-2xl flex items-center justify-center overflow-hidden">
                  {/* Placeholder for AI-generated image */}
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto bg-popoteja-orange/20 rounded-full flex items-center justify-center mb-4 animate-float">
                      <svg viewBox="0 0 24 24" className="w-16 h-16 text-popoteja-orange" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <p className="text-slate-500 text-sm font-medium">
                      🎨 Imagen IA:<br/>
                      Perro feliz en asiento trasero<br/>
                      con cinturón de seguridad
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-slate-800">Viaje Confirmado</p>
                  <p className="text-sm text-slate-500">Mascota a salvo 🐕</p>
                </div>
              </motion.div>

              {/* Stats Card */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4"
              >
                <div className="text-center">
                  <p className="text-2xl font-bold text-popoteja-orange">24h</p>
                  <p className="text-xs text-slate-500">Disponibles</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
