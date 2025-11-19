import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

interface PricingCardProps {
  title: string;
  price?: number; // legacy single price
  prices?: {
    mensual: number;
    trimestral: number;
    semestral: number;
  };
  selectedPeriod?: "mensual" | "trimestral" | "semestral";
  features: string[];
  popular?: boolean;
  className?: string;
}

const PricingCard = ({ title, price, prices, features, popular, selectedPeriod, className = "" }: PricingCardProps) => {
  return (
    <div
      className={`relative bg-card p-8 rounded-lg border flex flex-col ${
        popular ? "border-primary shadow-glow" : "border-border"
      } hover:border-primary transition-all duration-300 ${className}`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
            Más popular
          </span>
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        {prices ? (
          (() => {
            const period = selectedPeriod ?? 'mensual';
            const label = period === 'mensual' ? 'Mensual' : period === 'trimestral' ? 'Trimestral' : 'Semestral';
            const value = period === 'mensual' ? prices.mensual : period === 'trimestral' ? prices.trimestral : prices.semestral;
            return (
              <div className="text-center">
                <div className="text-xl text-muted-foreground">{label}</div>
                <div className="text-5xl font-bold text-primary">{value.toFixed(2)}€</div>
              </div>
            );
          })()
        ) : (
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-5xl font-bold text-primary">{price}€</span>
            <span className="text-muted-foreground">/mes</span>
          </div>
        )}
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
        <Link to="/contact">Empieza ya</Link>
      </Button>
    </div>
  );
};

export default PricingCard;
