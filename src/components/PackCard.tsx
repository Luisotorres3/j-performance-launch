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
  className?: string;
}

const PackCard = ({ title, originalPrice, price, savings, gift, features, className = "" }: PackCardProps) => {
  return (
    <div className={`bg-card p-8 rounded-lg border border-border hover:border-primary transition-all duration-300 hover:shadow-glow flex flex-col ${className}`}>
      <div className="flex items-center gap-2 mb-4">
        <Gift className="w-6 h-6 text-primary" />
        <span className="text-sm font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded-md">
          Pack especial
        </span>
      </div>

      <h3 className="text-2xl font-bold mb-4">{title}</h3>

      <div className="mb-6">
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-4xl font-bold text-primary">{price}€</span>
          <span className="text-lg text-muted-foreground line-through">{originalPrice}€</span>
        </div>
        <p className="text-lg font-semibold text-teal-600 dark:text-teal-400">Ahorra {savings}€</p>
      </div>
      <div className="bg-muted p-4 rounded-lg mb-6 border border-border">
        <div className="flex items-center gap-2 mb-2">
          <Gift className="w-5 h-5 text-primary shrink-0" />
          <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Regalo incluido:</span>
        </div>
        <p className="text-muted-foreground">
          <strong className="text-slate-900 dark:text-white">{gift}</strong>
        </p>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      <Button asChild className="w-full mt-auto" size="lg">
        <Link to="/contacto">Adquirir pack</Link>
      </Button>
    </div>
  );
};

export default PackCard;
