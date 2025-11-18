import { Dumbbell, Apple, Target } from "lucide-react";

const Highlights = () => {
  const highlights = [
    {
      icon: Target,
      title: "Performance Optimization",
      description: "Scientifically-backed training programs designed to maximize your physical performance and athletic capabilities.",
    },
    {
      icon: Apple,
      title: "Nutrition Guidance",
      description: "Personalized nutrition plans that fuel your body for optimal results and sustainable progress.",
    },
    {
      icon: Dumbbell,
      title: "Personalized Training",
      description: "Custom workout programs tailored to your goals, fitness level, and biomechanics for maximum efficiency.",
    },
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Why Choose J Performance Systems</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional coaching that combines expertise, dedication, and proven methods to help you reach your goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-lg border border-border hover:border-primary transition-all duration-300 hover:shadow-glow animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <highlight.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{highlight.title}</h3>
              <p className="text-muted-foreground">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
