import React from "react";
import { motion } from "framer-motion";
import perfilImg from "@/assets/hero.png";

/**
 * Profile-like Hero section using Framer Motion
 * - Two-column layout (photo left / content right)
 * - Decorative gradients and floating badges
 * - Spanish texts and teal/cyan styling, dark/light support
 */
const Hero: React.FC = () => {
  const certifications = [
    { id: 1, name: "Entrenadora Personal Certificada", icon: "🏆" },
    { id: 2, name: "Especialista en Nutrición Deportiva", icon: "🥗" },
    { id: 3, name: "Instructora de Yoga y Pilates", icon: "🧘‍♀️" },
    { id: 4, name: "Coach de Bienestar Integral", icon: "💚" },
  ];

  const achievements = [
    { id: 1, number: "500+", label: "Clientes transformados" },
    { id: 2, number: "5+", label: "Años de experiencia" },
    { id: 3, number: "98%", label: "Tasa de satisfacción" },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-background to-muted/50 min-h-screen py-20 md:py-32">
      <div className="container mx-auto px-4">

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-3xl transform rotate-3 scale-105 opacity-20" />

              {/* Main photo container */}
              <div className="relative bg-white dark:bg-slate-800 rounded-3xl p-4 shadow-2xl">
                <div className="rounded-2xl overflow-hidden bg-white dark:bg-slate-800 w-full h-[520px] md:h-[640px] mx-auto flex items-center justify-center">
                  <img
                    src={perfilImg}
                    alt="Entrenador personal"
                    className="max-w-full max-h-full object-contain rounded-2xl shadow-lg"
                  />
                </div>
              </div>

              {/* Floating badges removed (clean photo) */}
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Introduction */}
            <div>
              <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-4">Juan Pasquau</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Soy entrenador personal con formación en entrenamiento funcional y nutrición deportiva. Ayudo a clientes a lograr objetivos reales mediante planes personalizados, seguimiento y apoyo constante.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Mi enfoque combina análisis biomecánico, programación progresiva y hábitos de vida sostenibles para resultados duraderos.
              </p>
            </div>

            {/* Certifications */}
            <div>
              <h4 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">Certificaciones y Especialidades</h4>
              <div className="grid grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    className="flex items-center space-x-3 p-3 bg-white dark:bg-slate-700 rounded-lg shadow-sm border border-gray-100 dark:border-slate-600"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <span className="text-2xl">{cert.icon}</span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{cert.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h4 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">Logros Destacados</h4>
              <div className="flex space-x-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.id}
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 * index }}
                  >
                    <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">{achievement.number}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{achievement.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA removed as requested */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
