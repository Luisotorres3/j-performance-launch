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
      gift: "500g Premium Protein Powder",
      features: [
        "3 months of Básico plan",
        "All basic plan features included",
        "Personalized training program",
        "Weekly progress tracking",
        "Nutrition guidelines",
        "Email support",
      ],
    },
    {
      title: "Pack 3 Meses Avanzado",
      originalPrice: 225,
      price: 190,
      savings: 35,
      gift: "2kg Premium Protein Powder (~45€ value)",
      features: [
        "3 months of Avanzado plan",
        "All advanced plan features",
        "Advanced training & nutrition",
        "Bi-weekly video calls",
        "Priority support",
        "Performance dashboard",
      ],
    },
    {
      title: "Pack 3 Meses Élite",
      originalPrice: 270,
      price: 235,
      savings: 35,
      gift: "2kg Premium Protein + 500g Creatine",
      features: [
        "3 months of Élite plan",
        "All premium features",
        "Weekly consultations",
        "Biomechanics analysis",
        "24/7 support",
        "Body composition tracking",
        "Supplement guidance",
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
              Special <span className="text-primary">3-Month Packs</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Commit to your transformation with our exclusive 3-month packages. Save money and receive premium gifts to support your journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {packs.map((pack, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <PackCard {...pack} />
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-3xl mx-auto bg-muted p-8 rounded-lg border border-border">
            <h3 className="text-2xl font-bold mb-4 text-center">Why Choose a 3-Month Pack?</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong>Better Results:</strong> Consistency is key to transformation. 3 months provides the optimal timeframe to see significant changes.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong>Cost Savings:</strong> Save 35€ compared to monthly subscriptions.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong>Premium Gifts:</strong> Receive high-quality supplements to accelerate your progress.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong>Long-term Commitment:</strong> Build lasting habits and achieve sustainable results.</span>
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
