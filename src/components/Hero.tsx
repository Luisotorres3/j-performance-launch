import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        {/* Image Placeholder */}
        <div className="order-1 md:order-2 animate-fade-in">
          <div className="w-full max-w-md mx-auto aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Placeholder para tu foto</span>
          </div>
        </div>

        {/* Content */}
        <div className="order-2 md:order-1 text-center md:text-left animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            Eleva tu Rendimiento
          </h1>
          <p className="text-lg text-blue-800 font-semibold mb-6">
            Texto para el subtítulo o una frase llamativa.
          </p>
          <p className="text-base text-gray-600 mb-8 max-w-xl mx-auto md:mx-0">
            Aquí puedes añadir una pequeña descripción personal. Este es un texto de ejemplo que puedes sustituir fácilmente para explicar quién eres, tu filosofía de entrenamiento y cómo ayudas a tus clientes a alcanzar sus metas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link to="/contact">Comienza tu transformación</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
