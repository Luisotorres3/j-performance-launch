import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Básico",
    prices: {
      monthly: "49,87 €",
      quarterly: "134,21 €",
      semiannually: "280,17 €",
    },
  },
  {
    name: "Profesional",
    prices: {
      monthly: "74,87 €",
      quarterly: "209,21 €",
      semiannually: "419,17 €",
    },
  },
  {
    name: "Élite",
    prices: {
      monthly: "104,87 €",
      quarterly: "289,21 €",
      semiannually: "598,17 €",
    },
  },
  {
    name: "Opositores",
    prices: {
      monthly: "61,87 €",
      quarterly: "168,21 €",
      semiannually: "371,22 €",
    },
  },
  {
    name: "Readaptación",
    prices: {
      monthly: "35,87 €",
      quarterly: "95,21 €",
      semiannually: "190,17 €",
    },
  },
];

const PriceCard = ({ plan }) => (
  <div className="border border-gray-200 rounded-lg shadow-lg p-6 flex flex-col h-full">
    <h3 className="text-2xl font-bold text-center mb-4">{plan.name}</h3>
    <div className="flex-grow space-y-4">
      <div className="p-4 rounded-md bg-gray-50 border border-gray-100">
        <p className="text-lg font-semibold text-center">Mensual</p>
        <p className="text-3xl font-bold text-center my-2">{plan.prices.monthly}</p>
      </div>
      <div className="p-4 rounded-md bg-blue-50 border border-blue-100 relative">
        <span className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
          ¡INCLUYE!
        </span>
        <p className="text-lg font-semibold text-center">Trimestral</p>
        <p className="text-3xl font-bold text-center my-2">{plan.prices.quarterly}</p>
        <p className="text-sm text-center text-blue-800 font-medium">
          Incluye 1 kg de proteína + 250 g de creatina
        </p>
      </div>
      <div className="p-4 rounded-md bg-green-50 border border-green-100 relative">
        <span className="absolute top-0 right-0 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
          ¡INCLUYE!
        </span>
        <p className="text-lg font-semibold text-center">Semestral</p>
        <p className="text-3xl font-bold text-center my-2">{plan.prices.semiannually}</p>
        <p className="text-sm text-center text-green-800 font-medium">
          Incluye 2 kg de proteína + 250 g de creatina
        </p>
      </div>
    </div>
    <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white">
      Seleccionar Plan
    </Button>
  </div>
);

const Planes = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Planes de Entrenamiento
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Elige el plan que mejor se adapte a tus objetivos. Todos los planes incluyen programas personalizados y seguimiento continuo.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <PriceCard plan={plan} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Planes;
