import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Client } from "@/components/ClientsSection";

interface Props {
  clients: Client[];
  autoPlay?: boolean;
  interval?: number; // ms
}

const ClientsCarousel: React.FC<Props> = ({ clients, autoPlay = true, interval = 4000 }) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [swipeDistance, setSwipeDistance] = useState<number>(() =>
    typeof window !== "undefined" ? Math.max(300, window.innerWidth * 0.9) : 300
  );
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    const onResize = () => setSwipeDistance(Math.max(300, window.innerWidth * 0.9));
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!autoPlay) return;
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => goNext(), interval);
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [index, autoPlay, interval]);

  const goNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % clients.length);
  };
  const goPrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + clients.length) % clients.length);
  };

  if (!clients || clients.length === 0) return null;

  const current = clients[index];

  const imageVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? swipeDistance : -swipeDistance, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -swipeDistance : swipeDistance, opacity: 0 }),
  };

  const handleDragEnd = (offsetX: number, velocityX: number) => {
    // Use absolute offset * velocity (Framer Motion example) so direction is inferred
    const swipe = Math.abs(offsetX) * velocityX;
    const swipeConfidenceThreshold = 1000;
    if (swipe < -swipeConfidenceThreshold) {
      if (timerRef.current) window.clearTimeout(timerRef.current);
      goNext();
    } else if (swipe > swipeConfidenceThreshold) {
      if (timerRef.current) window.clearTimeout(timerRef.current);
      goPrev();
    }
  };

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Con quién he trabajado</h2>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6 bg-card rounded-2xl p-6 md:p-8 border border-border shadow-sm">
          <div className="relative w-full md:w-2/3 flex items-center justify-center">
            <button
              aria-label="Anterior"
              onClick={() => {
                if (timerRef.current) window.clearTimeout(timerRef.current);
                goPrev();
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-slate-800/80 hover:bg-white px-2 py-2 rounded-full shadow"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="w-full max-w-3xl h-[540px] md:h-[720px] rounded-xl overflow-hidden bg-muted flex items-center justify-center">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.img
                  key={current.id}
                  src={current.photo}
                  custom={direction}
                  variants={imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: "tween", duration: 0.6 }}
                  className="w-full h-full object-contain"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.25}
                  onDragStart={() => { if (timerRef.current) window.clearTimeout(timerRef.current); }}
                  onDragEnd={(event, info) => handleDragEnd(info.offset.x, info.velocity.x)}
                  whileTap={{ cursor: "grabbing" }}
                  style={{ touchAction: "pan-y" }}
                  alt={current.name}
                />
              </AnimatePresence>
            </div>

            <button
              aria-label="Siguiente"
              onClick={() => {
                if (timerRef.current) window.clearTimeout(timerRef.current);
                goNext();
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-slate-800/80 hover:bg-white px-2 py-2 rounded-full shadow"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

            <div className="w-full md:w-1/3">
            <h3 className="text-2xl md:text-3xl font-bold">{current.name}</h3>
            <div className="mt-2 text-sm text-primary font-semibold">{current.clubs}</div>
            <div className="text-sm text-muted-foreground mt-1">{current.role} • {current.duration}</div>

            {current.miniCV && <p className="mt-4 text-sm text-muted-foreground">{current.miniCV}</p>}
            <div className="mt-6 text-xs text-muted-foreground">{index + 1} / {clients.length}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsCarousel;
