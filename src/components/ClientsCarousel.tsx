import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Client } from "@/components/ClientsSection";

interface Props {
  clients: Client[];
  autoPlay?: boolean;
  interval?: number; // ms
}

const ClientsCarousel: React.FC<Props> = ({ clients, autoPlay = false, interval = 4000 }) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [swipeDistance, setSwipeDistance] = useState<number>(() =>
    typeof window !== "undefined" ? Math.max(300, window.innerWidth * 0.9) : 300
  );
  const [visibleCount, setVisibleCount] = useState<number>(3);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    const onResize = () => {
      setSwipeDistance(Math.max(300, window.innerWidth * 0.9));
    };
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
    setIndex((prev) => (prev + visibleCount) % clients.length);
  };
  const goPrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - visibleCount + clients.length * visibleCount) % clients.length);
  };

  if (!clients || clients.length === 0) return null;

  const imageVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? swipeDistance : -swipeDistance, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -swipeDistance : swipeDistance, opacity: 0 }),
  };

  const handleDragEnd = (offsetX: number, velocityX: number) => {
    // Framer Motion recommended pattern: offset * velocity
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

  // prepare visible items (wrap-around)
  const n = clients.length;
  const visible: Client[] = [];
  for (let i = 0; i < Math.min(visibleCount, n); i++) {
    visible.push(clients[(index + i) % n]);
  }

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Con quién he trabajado</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Algunos de los jugadores y profesionales con los que he colaborado.</p>
        </div>

        <div className="relative w-full">
          {/* Prev button */}
          <button
            aria-label="Anterior"
            onClick={() => {
              if (timerRef.current) window.clearTimeout(timerRef.current);
              goPrev();
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -ml-6 bg-white/80 dark:bg-slate-800/80 hover:bg-white px-2 py-2 rounded-full shadow"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Carousel viewport */}
          <div className="w-full overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={index}
                custom={direction}
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "tween", duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                onDragStart={() => { if (timerRef.current) window.clearTimeout(timerRef.current); }}
                onDragEnd={(event, info) => handleDragEnd(info.offset.x, info.velocity.x)}
                style={{ touchAction: "pan-y" }}
              >
                {visible.map((c) => (
                  <div key={c.id} className="bg-card rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col md:flex-row">
                    {/* Image on left */}
                    <div className="w-full md:w-64 h-48 md:h-auto flex-shrink-0 bg-muted flex items-center justify-center overflow-hidden aspect-square">
                      {c.photo ? (
                        <img src={c.photo} alt={`${c.name} - Cliente de J Performance System ${c.clubs ? `(${c.clubs})` : ''}`} className="w-full h-full object-cover" />
                      ) : (
                        <div className="text-sm text-muted-foreground">Imagen</div>
                      )}
                    </div>

                    {/* Info on right */}
                    <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                      <div className="text-2xl md:text-3xl font-bold">{c.name}</div>
                      {c.clubs && <div className="text-lg text-primary mt-2">{c.clubs}</div>}
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next button */}
          <button
            aria-label="Siguiente"
            onClick={() => {
              if (timerRef.current) window.clearTimeout(timerRef.current);
              goNext();
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 -mr-6 bg-white/80 dark:bg-slate-800/80 hover:bg-white px-2 py-2 rounded-full shadow"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientsCarousel;

