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
    <section className="py-12 sm:py-16 md:py-20 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fade-in">
           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-2">Por qué elegir J Performance System</h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            Entrenamiento profesional que combina experiencia, dedicación y métodos probados para ayudarte a alcanzar tus objetivos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-muted p-5 sm:p-6 md:p-8 rounded-lg border border-border hover:border-primary transition-all duration-300 hover:shadow-glow animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <highlight.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{highlight.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
