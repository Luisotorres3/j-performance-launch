import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeaderProps {
  title: string | ReactNode;
  description?: string;
  className?: string;
  animate?: boolean;
}

const SectionHeader = ({
  title,
  description,
  className = "",
  animate = true,
}: SectionHeaderProps) => {
  const content = (
    <div className={`text-center mb-12 sm:mb-16 px-2 ${className}`}>
      <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">{title}</h2>
      {description && (
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
          {description}
        </p>
      )}
    </div>
  );

  if (!animate) {
    return content;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
    >
      {content}
    </motion.div>
  );
};

export default SectionHeader;
