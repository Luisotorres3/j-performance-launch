import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  text: string;
  rating?: number;
}

const TestimonialCard = ({ name, text, rating = 5 }: TestimonialCardProps) => {
  return (
    <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all duration-300">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-primary text-primary" />
        ))}
      </div>
      <p className="text-muted-foreground mb-4 italic">"{text}"</p>
      <p className="font-semibold text-foreground">— {name}</p>
    </div>
  );
};

export default TestimonialCard;
