import { Dumbbell, Apple, Target } from "lucide-react";

const Highlights = () => {
  const highlights = [
    {
      icon: Target,
      title: "Optimización del rendimiento",
      description:
        "Programas de entrenamiento basados en la ciencia diseñados para maximizar tu rendimiento físico y capacidades atléticas.",
    },
    {
      icon: Apple,
      title: "Asesoría nutricional",
      description:
        "Planes de nutrición personalizados que energizan tu cuerpo para resultados óptimos y progreso sostenible.",
    },
    {
      icon: Dumbbell,
      title: "Entrenamiento personalizado",
      description:
        "Programas de entrenamiento a medida según tus objetivos, nivel de condición y biomecánica para máxima eficiencia.",
    },
  ];

  return (
    <section className="py-10 sm:py-14 md:py-16 lg:py-20 bg-section-alt">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 px-2">
            Por qué elegir J Performance System
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            Entrenamiento profesional que combina experiencia, dedicación y métodos probados para
            ayudarte a alcanzar tus objetivos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-muted p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg border border-border hover:border-primary transition-all duration-300 hover:shadow-glow animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4 md:mb-6">
                <highlight.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-2.5 md:mb-3">
                {highlight.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
