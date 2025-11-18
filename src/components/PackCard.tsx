import { Button } from "@/components/ui/button";
import { Gift, Check } from "lucide-react";
import { Link } from "react-router-dom";

interface PackCardProps {
  title: string;
  originalPrice: number;
  price: number;
  savings: number;
  gift: string;
  features: string[];
}

const PackCard = ({ title, originalPrice, price, savings, gift, features }: PackCardProps) => {
  return (
    <div className="bg-card p-8 rounded-lg border border-border hover:border-primary transition-all duration-300 hover:shadow-glow">
      <div className="flex items-center gap-2 text-secondary mb-4">
        <Gift className="w-6 h-6" />
        <span className="text-sm font-semibold uppercase tracking-wider">Special Pack</span>
      </div>

      <h3 className="text-2xl font-bold mb-4">{title}</h3>

      <div className="mb-6">
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-4xl font-bold text-primary">{price}€</span>
          <span className="text-lg text-muted-foreground line-through">{originalPrice}€</span>
        </div>
        <p className="text-secondary font-semibold">Save {savings}€!</p>
      </div>

      <div className="bg-muted/50 p-4 rounded-lg mb-6">
        <div className="flex items-center gap-2 text-secondary font-semibold mb-2">
          <Gift className="w-5 h-5" />
          <span>Included Gift:</span>
        </div>
        <p className="text-muted-foreground">{gift}</p>
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
        <Link to="/contact">Get This Pack</Link>
      </Button>
    </div>
  );
};

export default PackCard;
