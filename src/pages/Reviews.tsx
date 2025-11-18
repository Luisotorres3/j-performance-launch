import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import { Star } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      name: "Carlos Martinez",
      text: "Working with J has been a game-changer. I've lost 15kg in 4 months while gaining muscle. The personalized approach and constant support made all the difference. Best decision I've ever made for my health.",
      rating: 5,
    },
    {
      name: "Miguel Rodriguez",
      text: "The Élite plan is worth every euro. Weekly consultations, detailed nutrition plans, and the biomechanics analysis helped me overcome a plateau I'd been stuck at for years. Incredible results!",
      rating: 5,
    },
    {
      name: "David Lopez",
      text: "J's expertise in sports nutrition and training is exceptional. I'm not just stronger and leaner, but I feel better in everyday life. The 3-month pack was a great investment.",
      rating: 5,
    },
    {
      name: "Antonio Garcia",
      text: "Professional, knowledgeable, and genuinely caring. J takes time to understand your goals and creates programs that actually work. I've recommended him to all my friends.",
      rating: 5,
    },
    {
      name: "Fernando Silva",
      text: "Started with the Básico plan and quickly upgraded to Avanzado. The progression in my strength and physique has been remarkable. The nutrition guidance alone is worth the price.",
      rating: 5,
    },
    {
      name: "Roberto Sanchez",
      text: "As someone who struggled with consistency, J's coaching kept me accountable and motivated. The results speak for themselves - down 20kg and feeling stronger than ever.",
      rating: 5,
    },
    {
      name: "Pablo Moreno",
      text: "The attention to detail in program design is impressive. Every exercise has a purpose, and the progression is perfectly structured. Finally seeing the results I've always wanted.",
      rating: 5,
    },
    {
      name: "Javier Ruiz",
      text: "J doesn't just give you a generic workout plan. He analyzes your biomechanics, adjusts based on your progress, and ensures you're training optimally. True professional.",
      rating: 5,
    },
    {
      name: "Luis Fernandez",
      text: "The 3-month Élite pack transformed my body and mindset. The weekly check-ins and constant support kept me on track. Best shape of my life at 42 years old!",
      rating: 5,
    },
  ];

  const averageRating = 5.0;
  const totalReviews = reviews.length;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">
              Client <span className="text-primary">Success Stories</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Real transformations from real people. See what J Performance Systems clients have to say about their journey.
            </p>

            {/* Rating Summary */}
            <div className="inline-flex items-center gap-4 bg-muted px-8 py-4 rounded-lg border border-border">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                ))}
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold">{averageRating.toFixed(1)}</div>
                <div className="text-sm text-muted-foreground">{totalReviews} reviews</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.05}s` }}>
                <TestimonialCard {...review} />
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center bg-muted p-12 rounded-lg border border-border">
            <h2 className="text-3xl font-bold mb-4">Ready to Write Your Success Story?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join these satisfied clients and start your transformation today with personalized training programs designed for results.
            </p>
            <a
              href="/training-plans"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              View Training Plans
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reviews;
