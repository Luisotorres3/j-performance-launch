import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PricingCard from "@/components/PricingCard";

const TrainingPlans = () => {
  const plans = [
    {
      title: "Básico",
      price: 45,
      features: [
        "Personalized training program",
        "Weekly progress check-ins",
        "Basic nutrition guidelines",
        "Email support",
        "Access to workout library",
      ],
    },
    {
      title: "Avanzado",
      price: 75,
      popular: true,
      features: [
        "All Básico features",
        "Advanced training program",
        "Detailed nutrition plan",
        "Bi-weekly video consultations",
        "Priority support",
        "Performance tracking dashboard",
      ],
    },
    {
      title: "Élite",
      price: 90,
      features: [
        "All Avanzado features",
        "Weekly video consultations",
        "Advanced biomechanics analysis",
        "Supplement recommendations",
        "24/7 direct messaging support",
        "Monthly body composition analysis",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">
              Monthly <span className="text-primary">Training Plans</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the perfect plan for your fitness journey. All plans include personalized programs designed specifically for your goals and fitness level.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <PricingCard {...plan} />
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">Not sure which plan is right for you?</p>
            <a href="/contact" className="text-primary hover:underline font-semibold">
              Contact me for a free consultation →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TrainingPlans;
