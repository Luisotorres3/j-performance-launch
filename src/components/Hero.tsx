import { motion } from "framer-motion";
import perfilImg from "@/assets/hero.png";

/**
 * Profile-like Hero section using Framer Motion
 * - Two-column layout (photo left / content right)
 * - Decorative gradients and floating badges
 * - Spanish texts and teal/cyan styling, dark/light support
 */
const Hero = () => {
  const certifications = [
    { id: 1, name: "Graduado en Ciencias de la Actividad Física y el Deporte", icon: "👨🏻‍🎓" },
    { id: 2, name: "Técnico en Nutrición deportiva", icon: "🥙" },
    { id: 3, name: "Técnico especialista en Entrenamiento de Fuerza", icon: "🏋🏻‍♂️" },
    { id: 4, name: "Preparador físico de alto rendimiento", icon: "🏃🏻‍♂️" },
  ];

  const achievements = [
    { id: 1, number: "70+", label: "Clientes transformados" },
    { id: 2, number: "6+", label: "Años de entrenamiento de fuerza" },
    { id: 3, number: "4+", label: "Años trabajando con deportistas profesionales" },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-background to-muted/50 min-h-screen pt-24 pb-8 sm:pt-28 sm:pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-start">
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
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl sm:rounded-3xl transform rotate-3 scale-105 opacity-20" />

              {/* Main photo container */}
              <div className="relative bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl md:rounded-3xl p-1.5 sm:p-3 md:p-4 shadow-2xl max-w-md mx-auto">
                <div className="rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden bg-white dark:bg-slate-800 w-full h-[280px] sm:h-[360px] md:h-[440px] lg:h-[520px] mx-auto flex items-start justify-center">
                  <img
                    src={perfilImg}
                    alt="Entrenador personal"
                    className="max-w-full max-h-full object-contain object-top rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg"
                  />
                </div>
              </div>

              {/* Floating badges removed (clean photo) */}
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="space-y-4 sm:space-y-6 md:space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Introduction */}
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-200 mb-2 sm:mb-3 md:mb-4">
                Juan Pasquau
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-2 sm:mb-3 md:mb-4">
                Entrenador de alto rendimiento especializado en fuerza, atletismo y preparación
                física para opositores y deportistas que buscan resultados serios.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-2 sm:mb-3 md:mb-4">
                Mi método de trabajo se basa en la solidez de una programación estratégica en función del nivel de rendimiento al que aspires y de tu punto de partida, y además, un seguimiento proactivo.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-2 sm:mb-3 md:mb-4">
                Soy directo y exigente: yo hago el análisis y la planificación, tú te
                encargas de cumplir. Disciplina clásica, visión de futuro y un sistema diseñado para
                que rindas como un profesional.
              </p>
            </div>

            {/* Certifications */}
            <div>
              <h4 className="text-base sm:text-lg md:text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2 sm:mb-3 md:mb-4">
                Certificaciones y Especialidades
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 md:gap-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    className="flex items-center space-x-2 sm:space-x-2.5 md:space-x-3 p-2 sm:p-2.5 md:p-3 bg-white dark:bg-slate-700 rounded-lg shadow-sm border border-gray-100 dark:border-slate-600"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <span className="text-lg sm:text-xl md:text-2xl shrink-0">{cert.icon}</span>
                    <span className="text-xs sm:text-sm md:text-sm font-medium text-gray-700 dark:text-gray-300 leading-tight">
                      {cert.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h4 className="text-base sm:text-lg md:text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2 sm:mb-3 md:mb-4">
                Logros Destacados
              </h4>
              <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 justify-center sm:justify-start">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.id}
                    className="text-center flex-1 min-w-[70px] sm:min-w-[80px]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 * index }}
                  >
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-teal-600 dark:text-teal-400">
                      {achievement.number}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-tight">
                      {achievement.label}
                    </div>
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
