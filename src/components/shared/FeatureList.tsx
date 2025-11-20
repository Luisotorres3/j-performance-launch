import { Check } from "lucide-react";

interface FeatureListProps {
  features: string[];
  className?: string;
  iconClassName?: string;
}

const FeatureList = ({ features, className = "", iconClassName = "" }: FeatureListProps) => {
  return (
    <ul className={`space-y-2 sm:space-y-3 ${className}`}>
      {features.map((feature, i) => (
        <li key={i} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm">
          <Check
            className={`w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0 mt-0.5 ${iconClassName}`}
          />
          <span className="text-muted-foreground leading-relaxed">{feature}</span>
        </li>
      ))}
    </ul>
  );
};

export default FeatureList;
