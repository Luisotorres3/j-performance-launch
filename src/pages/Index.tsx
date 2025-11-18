import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import TestimonialCard from "@/components/TestimonialCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  const testimonials = [
    {
      name: "Carlos M.",
      text: "In just 3 months with J Performance Systems, I've seen incredible results. The personalized approach made all the difference.",
    },
    {
      name: "Miguel R.",
      text: "The best investment in my health. Professional guidance, amazing results, and constant support throughout my journey.",
    },
    {
      name: "David L.",
      text: "J's expertise in biomechanics and nutrition transformed not just my body, but my entire lifestyle. Highly recommended!",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Highlights />
      
      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">What My Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real results from real people who transformed their lives with J Performance Systems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link to="/reviews">View All Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your Transformation?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join the J Performance Systems family and unlock your true potential with personalized training programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="shadow-glow">
                <Link to="/training-plans">View Training Plans</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
