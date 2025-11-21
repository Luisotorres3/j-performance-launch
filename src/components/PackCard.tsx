import { Button } from "@/components/ui/button";
import { Gift, Check } from "lucide-react";
import { Link } from "react-router-dom";

interface PackCardProps {
  title: string;
  originalPrice?: number;
  price: number;
  savings?: number;
  gift?: string;
  features?: string[];
  className?: string;
  index?: number;
  selected?: boolean;
  onSelect?: () => void;
  description?: string;
  showButton?: boolean;
  onButtonClick?: () => void;
}

const PackCard = ({ title, originalPrice, price, savings, gift, features, className = "", index = 0, selected = false, onSelect, description, showButton = true, onButtonClick }: PackCardProps) => {
  const borderColors = [
    "border-blue-500/30",
    "border-purple-500/30",
    "border-pink-500/30",
    "border-cyan-500/30",
    "border-amber-500/30",
  ];

  const selectedBorderColors = [
    "border-blue-500",
    "border-purple-500",
    "border-pink-500",
    "border-cyan-500",
    "border-amber-500",
  ];

  const buttonBorderColors = [
    "border-blue-500 hover:bg-blue-500",
    "border-purple-500 hover:bg-purple-500",
    "border-pink-500 hover:bg-pink-500",
    "border-cyan-500 hover:bg-cyan-500",
    "border-amber-500 hover:bg-amber-500",
  ];

  const ringColors = [
    "ring-blue-500/30",
    "ring-purple-500/30",
    "ring-pink-500/30",
    "ring-cyan-500/30",
    "ring-amber-500/30",
  ];

  const borderColor = selected
    ? selectedBorderColors[index % selectedBorderColors.length]
    : borderColors[index % borderColors.length];
  const ringColor = ringColors[index % ringColors.length];
  const buttonBorderColor = buttonBorderColors[index % buttonBorderColors.length];
  const isPopular = title === "Profesional";

  return (
    <div 
      className={`relative bg-card/50 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl border-2 ${borderColor} hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 flex flex-col ${className} ${isPopular ? 'ring-2 ring-primary/20' : ''} ${selected ? `ring-2 ${ringColor} shadow-xl` : ''}`}
    >
      {isPopular && (
        <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2">
          <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full shadow-lg">
            Más popular
          </span>
        </div>
      )}

      <h3 className="text-xl sm:text-2xl font-bold mb-2">{title}</h3>

      <div className="mb-4 sm:mb-6">
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-3xl sm:text-4xl md:text-5xl font-bold">{price}€</span>
          {originalPrice && (
            <span className="text-base sm:text-lg text-muted-foreground line-through">{originalPrice}€</span>
          )}
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground">por mes</p>
      </div>
      
      {description && (
        <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">{description}</p>
      )}
      
      {showButton && (
        <Button 
          className={`w-full mb-4 sm:mb-6 border-2 ${buttonBorderColor} hover:text-primary-foreground`}
          size="lg" 
          variant="outline"
          onClick={(e) => {
            e.stopPropagation();
            if (onButtonClick) {
              onButtonClick();
            }
          }}
        >
          Comenzar
        </Button>
      )}

      {features && features.length > 0 && (
        <>
          <div className={`border-t border-border pt-4 sm:pt-6 mb-3 sm:mb-4 ${!showButton ? 'mt-4 sm:mt-6' : ''}`}>
            <p className="text-xs sm:text-sm font-semibold mb-2 sm:mb-3">Incluye:</p>
          </div>

          <ul className="space-y-2 sm:space-y-3 flex-1">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm">
                <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </>
      )}
      
      {gift && (
        <div className="flex items-center gap-2 mt-4 sm:mt-6 bg-primary/10 border border-primary/30 rounded-lg p-2 sm:p-3">
          <Gift className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0" />
          <p className="text-xs sm:text-sm text-foreground font-medium">{gift}</p>
        </div>
      )}
    </div>
  );
};

export default PackCard;
