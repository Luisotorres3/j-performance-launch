import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PackCard from "@/components/PackCard";

const Packs = () => {
  const packs = [
    {
      title: "Pack 3 Meses Básico",
      originalPrice: 135,
      price: 100,
      savings: 35,
      gift: "500 g Proteína Premium",
      features: [
        "3 meses del plan Básico",
        "Incluye todas las características del plan Básico",
        "Programa de entrenamiento personalizado",
        "Seguimiento semanal del progreso",
        "Guías de nutrición",
        "Soporte por correo electrónico",
      ],
    },
    {
      title: "Pack 3 Meses Avanzado",
      originalPrice: 225,
      price: 190,
      savings: 35,
      gift: "2 kg Proteína Premium (~45€ valor)",
      features: [
        "3 meses del plan Avanzado",
        "Incluye todas las características del plan Avanzado",
        "Entrenamiento y nutrición avanzada",
        "Llamadas por video quincenales",
        "Soporte prioritario",
        "Panel de rendimiento",
      ],
    },
    {
      title: "Pack 3 Meses Élite",
      originalPrice: 270,
      price: 235,
      savings: 35,
      gift: "2 kg Proteína Premium + 500 g Creatina",
      features: [
        "3 meses del plan Élite",
        "Incluye todas las características premium",
        "Consultas semanales",
        "Análisis biomecánico",
        "Soporte 24/7",
        "Seguimiento de composición corporal",
        "Orientación sobre suplementos",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-2">
              Packs especiales de <span className="text-primary">3 meses</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Comprométete con tu transformación con nuestros packs exclusivos de 3 meses. Ahorra y recibe regalos premium para apoyar tu progreso.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
            {packs.map((pack, index) => (
              <div
                key={index}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <PackCard {...pack} />
              </div>
            ))}
          </div>

          <div className="mt-10 sm:mt-12 md:mt-16 max-w-3xl mx-auto bg-muted p-4 sm:p-6 md:p-8 rounded-lg border border-border">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-center">¿Por qué elegir un pack de 3 meses?</h3>
            <ul className="space-y-2 sm:space-y-3 text-muted-foreground text-sm sm:text-base">
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-primary font-bold shrink-0">•</span>
                <span><strong>Mejores resultados:</strong> La constancia es clave para la transformación. 3 meses proporcionan el tiempo óptimo para ver cambios significativos.</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-primary font-bold shrink-0">•</span>
                <span><strong>Ahorro de costes:</strong> Ahorra 35€ en comparación con suscripciones mensuales.</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-primary font-bold shrink-0">•</span>
                <span><strong>Regalos Premium:</strong> Recibe suplementos de alta calidad para acelerar tu progreso.</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-primary font-bold shrink-0">•</span>
                <span><strong>Compromiso a largo plazo:</strong> Crea hábitos duraderos y logra resultados sostenibles.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Packs;
