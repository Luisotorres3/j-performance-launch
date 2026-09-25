import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import { Button } from "./ui/button";
import { useReducedMotion } from "framer-motion";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const reduced = useReducedMotion();
  const { pathname, key, hash } = useLocation();
  const previousPath = useRef<string>();

  useLayoutEffect(() => {
    const changedPage = previousPath.current !== pathname;
    previousPath.current = pathname;
    // A new location key also catches clicking Inicio while already on the homepage.
    if (hash || (!changedPage && pathname !== "/")) return;
    const reset = () => window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    reset();
    const frame = requestAnimationFrame(reset);
    return () => cancelAnimationFrame(frame);
  }, [pathname, key, hash]);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    toggleVisibility();
    window.addEventListener("scroll", toggleVisibility, { passive: true });

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: reduced ? "instant" : "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="back-to-top fixed bottom-6 right-6 z-30 h-11 w-11 rounded-none shadow-lg transition-colors duration-300"
          aria-label="Volver arriba"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </>
  );
};

export default ScrollToTop;
