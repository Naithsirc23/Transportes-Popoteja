"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Heart, Clock, MapPin, Sparkles, Award } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Máxima Seguridad",
    description: "Cinturones de seguridad especiales para mascotas, asientos con fundas protectoras y transportines homologados.",
  },
  {
    icon: Heart,
    title: "Amantes de los Animales",
    description: "Nuestros conductores son personas que genuinamente aman a los animales. Tratan a tu mascota como familia.",
  },
  {
    icon: Clock,
    title: "Puntualidad Garantizada",
    description: "Llegamos a la hora acordada. Respetamos tu tiempo y el de tu mascota. Sin esperas innecesarias.",
  },
  {
    icon: MapPin,
    title: "Cobertura Total",
    description: "Lima Metropolitana y Callao. Desde Miraflores hasta Comas, desde La Punta hasta Carabayllo.",
  },
  {
    icon: Sparkles,
    title: "Higiene Impecable",
    description: "Vehículo desinfectado antes y después de cada viaje. Ambiente limpio y fresco para tu mascota.",
  },
  {
    icon: Award,
    title: "Experiencia Comprobada",
    description: "Años de experiencia en transporte. Empresa legalmente constituida con todos los permisos al día.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-popoteja-orange/5 rounded-full blur-3xl translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-popoteja-orange font-semibold text-sm tracking-wider uppercase mb-3">
            ¿Por Qué Elegirnos?
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            No somos un taxi <span className="gradient-text italic">cualquiera</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Somos el único servicio de transporte en Lima diseñado exclusivamente 
            pensando en el bienestar de tu mascota.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl hover:bg-gradient-to-br hover:from-popoteja-cream/50 hover:to-white transition-all duration-300 border border-transparent hover:border-popoteja-orange/20"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-popoteja-orange/20 to-popoteja-teal/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-popoteja-teal" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
