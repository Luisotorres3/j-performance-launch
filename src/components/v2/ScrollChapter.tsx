import { useRef, type ReactNode } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

export default function ScrollChapter({
  id,
  children,
  next,
  number,
}: {
  id: string;
  children: ReactNode;
  next?: { id: string; label: string };
  number: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <section id={id} ref={ref} className="scroll-chapter" aria-label={`Capítulo ${number}`}>
      <div className="chapter-content">{children}</div>
      {next && (
        <div className="chapter-connector v2-container">
          <motion.div
            className="chapter-progress"
            aria-hidden="true"
            style={{ scaleX: reduced ? 1 : progress }}
          />
          <span>{number} / SIGUIENTE CAPÍTULO</span>
          <button
            onClick={() =>
              document
                .getElementById(next.id)
                ?.scrollIntoView({ behavior: reduced ? "instant" : "smooth" })
            }
          >
            Siguiente: {next.label} <ArrowDownRight size={23} />
          </button>
        </div>
      )}
    </section>
  );
}
