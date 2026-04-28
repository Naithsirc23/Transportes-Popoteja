"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, PawPrint, Phone, MapPin, Mail } from "lucide-react";
import { supabase } from "@/app/lib/supabase";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    tipo_mascota: "perro",
    origen: "",
    destino: "",
    fecha_viaje: "",
    mensaje: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const { error } = await supabase.from("leads").insert([
        {
          nombre: formData.nombre,
          telefono: formData.telefono,
          email: formData.email || null,
          tipo_mascota: formData.tipo_mascota,
          origen: formData.origen,
          destino: formData.destino,
          fecha_viaje: formData.fecha_viaje || null,
          mensaje: formData.mensaje || null,
          estado: "nuevo",
        },
      ]);

      if (error) throw error;

      setSubmitStatus("success");
      setFormData({
        nombre: "",
        telefono: "",
        email: "",
        tipo_mascota: "perro",
        origen: "",
        destino: "",
        fecha_viaje: "",
        mensaje: "",
      });
    } catch (err: any) {
      setSubmitStatus("error");
      setErrorMessage(err.message || "Hubo un error al enviar el formulario. Por favor, intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-24 bg-gradient-to-b from-popoteja-cream/30 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-popoteja-teal font-semibold text-sm tracking-wider uppercase mb-3">
            Contáctanos
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            ¿Listo para el <span className="gradient-text italic">próximo viaje</span>?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Cuéntanos sobre tu mascota y te contactamos en menos de 30 minutos 
            con una cotización personalizada.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-100">
              {submitStatus === "success" ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    ¡Solicitud Enviada!
                  </h3>
                  <p className="text-slate-600 mb-6">
                    Gracias por confiar en Popoteja. Te contactaremos muy pronto 
                    por WhatsApp o teléfono para confirmar tu viaje.
                  </p>
                  <button
                    onClick={() => setSubmitStatus("idle")}
                    className="bg-popoteja-orange text-white px-6 py-3 rounded-full font-semibold hover:bg-popoteja-orange-dark transition-colors"
                  >
                    Enviar otra solicitud
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {submitStatus === "error" && (
                    <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <p className="text-red-700 text-sm">{errorMessage}</p>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Tu Nombre *
                      </label>
                      <input
                        type="text"
                        name="nombre"
                        required
                        value={formData.nombre}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-popoteja-orange focus:ring-2 focus:ring-popoteja-orange/20 outline-none transition-all"
                        placeholder="Ej: María González"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        name="telefono"
                        required
                        value={formData.telefono}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-popoteja-orange focus:ring-2 focus:ring-popoteja-orange/20 outline-none transition-all"
                        placeholder="Ej: 999 888 777"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Email (opcional)
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-popoteja-orange focus:ring-2 focus:ring-popoteja-orange/20 outline-none transition-all"
                        placeholder="tu@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Tipo de Mascota *
                      </label>
                      <select
                        name="tipo_mascota"
                        required
                        value={formData.tipo_mascota}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-popoteja-orange focus:ring-2 focus:ring-popoteja-orange/20 outline-none transition-all bg-white"
                      >
                        <option value="perro">Perro 🐕</option>
                        <option value="gato">Gato 🐈</option>
                        <option value="otro">Otro 🐾</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Origen *
                      </label>
                      <input
                        type="text"
                        name="origen"
                        required
                        value={formData.origen}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-popoteja-orange focus:ring-2 focus:ring-popoteja-orange/20 outline-none transition-all"
                        placeholder="Ej: Miraflores, Av. Larco 123"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Destino *
                      </label>
                      <input
                        type="text"
                        name="destino"
                        required
                        value={formData.destino}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-popoteja-orange focus:ring-2 focus:ring-popoteja-orange/20 outline-none transition-all"
                        placeholder="Ej: San Isidro, Clínica VetPet"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Fecha del Viaje (opcional)
                    </label>
                    <input
                      type="date"
                      name="fecha_viaje"
                      value={formData.fecha_viaje}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-popoteja-orange focus:ring-2 focus:ring-popoteja-orange/20 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Mensaje Adicional (opcional)
                    </label>
                    <textarea
                      name="mensaje"
                      rows={3}
                      value={formData.mensaje}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-popoteja-orange focus:ring-2 focus:ring-popoteja-orange/20 outline-none transition-all resize-none"
                      placeholder="¿Algo especial que debamos saber sobre tu mascota?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-popoteja-orange to-popoteja-orange-dark text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Solicitar Cotización
                      </>
                    )}
                  </button>

                  <p className="text-center text-sm text-slate-500">
                    También puedes escribirnos directamente por{" "}
                    <a
                      href="https://wa.me/51999999999?text=Hola%20Popoteja!"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-popoteja-orange font-semibold hover:underline"
                    >
                      WhatsApp
                    </a>
                  </p>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-gradient-to-br from-popoteja-teal to-popoteja-teal-dark rounded-3xl p-8 text-white">
              <PawPrint className="w-12 h-12 mb-6 opacity-80" />
              <h3 className="text-2xl font-bold mb-4">
                ¿Prefieres llamar?
              </h3>
              <p className="text-white/80 mb-6">
                Estamos disponibles de lunes a sábado. 
                Emergencias las 24 horas.
              </p>

              <div className="space-y-4">
                <a href="tel:+51999999999" className="flex items-center gap-3 hover:translate-x-1 transition-transform">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Llámanos</p>
                    <p className="font-semibold">+51 999 888 777</p>
                  </div>
                </a>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Email</p>
                    <p className="font-semibold">hola@popoteja.pe</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Cobertura</p>
                    <p className="font-semibold">Lima y Callao</p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA Card */}
            <a
              href="https://wa.me/51999999999?text=Hola%20Popoteja!%20Quiero%20solicitar%20un%20viaje%20para%20mi%20mascota"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-8 text-white hover:shadow-xl hover:scale-[1.02] transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-lg">Escríbenos por WhatsApp</p>
                  <p className="text-green-100 text-sm">Respuesta inmediata</p>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
