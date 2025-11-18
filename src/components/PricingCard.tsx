import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

interface PricingCardProps {
  title: string;
  price: number;
  features: string[];
  popular?: boolean;
}

const PricingCard = ({ title, price, features, popular }: PricingCardProps) => {
  return (
    <div
      className={`relative bg-card p-8 rounded-lg border ${
        popular ? "border-primary shadow-glow" : "border-border"
      } hover:border-primary transition-all duration-300`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-5xl font-bold text-primary">{price}€</span>
          <span className="text-muted-foreground">/month</span>
        </div>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      <Button asChild className="w-full" size="lg">
        <Link to="/contact">Start Now</Link>
      </Button>
    </div>
  );
};

export default PricingCard;
