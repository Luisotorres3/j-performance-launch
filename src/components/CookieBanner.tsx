import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-t-2 border-border shadow-2xl animate-in slide-in-from-bottom duration-300">
      <div className="container mx-auto px-4 py-4 sm:py-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1 pr-4">
            <p className="text-sm sm:text-base text-foreground leading-relaxed">
              🍪 Utilizamos cookies técnicas necesarias para el funcionamiento del sitio web y
              servicios de terceros como Google Meet y Calendly. Al continuar navegando, aceptas su
              uso.
              <Link
                to="/cookies"
                className="text-primary hover:underline ml-1"
                onClick={() => window.scrollTo(0, 0)}
              >
                Más información
              </Link>
            </p>
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-3 w-full sm:w-auto">
            <Button onClick={acceptCookies} size="sm" className="flex-1 sm:flex-none min-w-[100px]">
              Aceptar
            </Button>
            <Button
              onClick={rejectCookies}
              variant="outline"
              size="sm"
              className="flex-1 sm:flex-none min-w-[100px]"
            >
              Rechazar
            </Button>
            <Button
              onClick={rejectCookies}
              variant="ghost"
              size="icon"
              className="sm:hidden"
              aria-label="Cerrar"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
