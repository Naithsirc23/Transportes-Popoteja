"use client";

import { motion } from "framer-motion";
import { MessageCircle, CalendarCheck, Car, PartyPopper } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Escríbenos",
    description: "Contáctanos por WhatsApp o llena el formulario. Cuéntanos sobre tu mascota, origen y destino.",
    color: "text-popoteja-orange",
    bgColor: "bg-popoteja-orange/10",
  },
  {
    number: "02",
    icon: CalendarCheck,
    title: "Confirma tu Viaje",
    description: "Te enviamos la cotización y confirmas la fecha y hora. ¡Sin sorpresas, precio fijo desde el inicio!",
    color: "text-popoteja-teal",
    bgColor: "bg-popoteja-teal/10",
  },
  {
    number: "03",
    icon: Car,
    title: "Nosotros Vamos",
    description: "Llegamos puntualmente a tu domicilio. Tu mascota viaja segura con cinturón especial y asientos protegidos.",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    number: "04",
    icon: PartyPopper,
    title: "¡Llegó a Salvo!",
    description: "Recibes confirmación de llegada. Tu mascota feliz, tú tranquilo. ¡Listo para el próximo viaje!",
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 bg-gradient-to-b from-white to-popoteja-cream/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-popoteja-teal font-semibold text-sm tracking-wider uppercase mb-3">
            Proceso Simple
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Así de <span className="gradient-text italic">fácil</span> es viajar
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            En 4 simples pasos, tu mascota estará en su destino. Sin complicaciones, sin estrés.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector line (desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-popoteja-orange/30 to-popoteja-teal/30 -translate-x-1/2" />
              )}

              <div className="text-center">
                {/* Number */}
                <div className="text-6xl font-black text-slate-100 mb-4">
                  {step.number}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 ${step.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <step.icon className={`w-8 h-8 ${step.color}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="https://wa.me/51999999999?text=Hola%20Popoteja!%20Quiero%20solicitar%20un%20viaje"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-popoteja-teal to-popoteja-teal-dark text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            Empezar por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
