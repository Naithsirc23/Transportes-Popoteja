"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight, BookOpen } from "lucide-react";

const posts = [
  {
    title: "5 Tips para Viajar con tu Perro en Auto",
    excerpt: "Descubre cómo hacer que el viaje sea seguro y cómodo para tu mejor amigo. Desde el transportín ideal hasta las paradas estratégicas.",
    date: "15 Abr 2026",
    category: "Consejos",
    color: "from-popoteja-orange to-popoteja-orange-dark",
  },
  {
    title: "¿Por Qué tu Gato Odia el Transportín?",
    excerpt: "Entiende el comportamiento felino y aprende técnicas para que tu gato asocie el transportín con experiencias positivas.",
    date: "10 Abr 2026",
    category: "Bienestar",
    color: "from-popoteja-teal to-popoteja-teal-dark",
  },
  {
    title: "Vacunas Obligatorias antes de Viajar",
    excerpt: "Guía completa de las vacunas y documentos necesarios para transportar mascotas dentro de Lima y Callao.",
    date: "5 Abr 2026",
    category: "Salud",
    color: "from-purple-500 to-purple-600",
  },
];

export default function Blog() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-popoteja-cream/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-popoteja-orange font-semibold text-sm tracking-wider uppercase mb-3">
            Novedades
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Blog <span className="gradient-text italic">Popoteja</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Tips, consejos y noticias para el cuidado de tu mascota. 
            Contenido fresco cada semana.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100 hover:border-transparent"
            >
              {/* Image Placeholder */}
              <div className={`h-48 bg-gradient-to-br ${post.color} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-white/30" />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-slate-800 text-xs font-bold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-slate-400 text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-popoteja-orange transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <button className="inline-flex items-center gap-2 text-popoteja-orange font-semibold text-sm group/link">
                  Leer más
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Coming Soon */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-slate-500">
            📝 Próximamente más artículos sobre el cuidado de tu mascota
          </p>
        </motion.div>
      </div>
    </section>
  );
}
