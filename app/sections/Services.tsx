"use client";

import { motion } from "framer-motion";
import { Stethoscope, Scissors, Siren, Truck, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Veterinario",
    description: "Traslado seguro a clínicas veterinarias, chequeos rutinarios y consultas especializadas. Tu mascota llega calmada y a tiempo.",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Scissors,
    title: "Grooming & Spa",
    description: "Ida y vuelta a la peluquería canina o felina. Llega limpio, relajado y con su mejor look. Incluye toalla de secado.",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: Siren,
    title: "Emergencias 24/7",
    description: "¿Tu mascota necesita atención urgente? Estamos disponibles las 24 horas para traslados de emergencia a centros veterinarios.",
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
  },
  {
    icon: Truck,
    title: "Mudanzas & Viajes",
    description: "Traslados interdistritales y de larga distancia. Ideal para mudanzas o visitas a familiares. Asientos preparados para máximo confort.",
    color: "from-popoteja-orange to-popoteja-orange-dark",
    bgColor: "bg-orange-50",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-popoteja-cream/30 rounded-full blur-3xl -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-popoteja-orange font-semibold text-sm tracking-wider uppercase mb-3">
            Nuestros Servicios
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            ¿A dónde quiere ir{" "}
            <span className="gradient-text italic">tu mascota</span>?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Cubrimos todas las necesidades de transporte para tu compañero peludo. 
            Seguridad, puntualidad y mucho cariño en cada viaje.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-transparent h-full">
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <service.icon className={`w-8 h-8 bg-gradient-to-br ${service.color} text-white rounded-lg p-1.5`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-popoteja-orange transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <a
                      href="#contacto"
                      className="inline-flex items-center gap-2 text-popoteja-orange font-semibold text-sm group/link"
                    >
                      Solicitar este servicio
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
