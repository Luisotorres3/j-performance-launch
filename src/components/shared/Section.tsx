import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  bgColor?: "background" | "section-alt" | "muted";
  containerClassName?: string;
}

const Section = ({ 
  children, 
  className = "", 
  bgColor = "background",
  containerClassName = ""
}: SectionProps) => {
  const bgClass = bgColor === "section-alt" 
    ? "bg-section-alt" 
    : bgColor === "muted" 
    ? "bg-muted/20" 
    : "bg-background";

  return (
    <section className={`py-20 ${bgClass} ${className}`}>
      <div className={`container mx-auto px-4 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
};

export default Section;
