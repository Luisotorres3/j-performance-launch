import { Link } from "react-router-dom";
import { Instagram, Mail, Phone, Send, MessageCircle } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import logoImg from "@/assets/logo.png";
import SectionSeparator from "@/components/SectionSeparator";

const Footer = () => {
  return (
    <>
      <SectionSeparator />
      <footer className="bg-muted border-t border-border py-6 sm:py-10 md:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
            {/* Brand - Mobile Top Full Width, Desktop Left */}
            <div className="text-center sm:text-left order-1 md:order-1 col-span-2 md:col-span-1">
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 md:mb-4">
                <span className="text-primary">J</span> Performance System
              </h3>
              
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 max-w-xs mx-auto sm:mx-0">
                Transforma tu cuerpo y mente con programas de entrenamiento personalizados diseñados para un rendimiento óptimo.
              </p>
              <img 
                src={logoImg} 
                alt="J Performance System Logo" 
                className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain mx-auto sm:mx-0"
              />
            </div>

            {/* Quick Links - Mobile Bottom Left, Desktop Center */}
            <div className="text-left sm:text-left order-2 md:order-2">
              <h4 className="font-semibold mb-2 sm:mb-3 md:mb-4 text-sm sm:text-base">Enlaces rápidos</h4>
              <div className="flex flex-col gap-2 sm:gap-2.5 md:gap-3 items-start">
                <Link to="/planes" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                  Planes de entrenamiento
                </Link>
                <Link to="/blog" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
                <Link to="/reviews" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                  Mis clientes
                </Link>
              </div>
            </div>

            {/* Contact - Mobile Bottom Right, Desktop Right */}
            <div className="text-right sm:text-left order-3 md:order-3">
              <h4 className="font-semibold mb-2 sm:mb-3 md:mb-4 text-sm sm:text-base">Contacto</h4>
              <div className="flex flex-col gap-2 sm:gap-2.5 md:gap-3 items-end sm:items-start">
                <a href="mailto:info@jperformance.com" className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Mail size={16} className="sm:w-4 sm:h-4 shrink-0" />
                  <span className="break-all">info@jperformance.com</span>
                </a>
                <a href="tel:+34600000000" className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Phone size={16} className="sm:w-4 sm:h-4 shrink-0" />
                  +34 600 000 000
                </a>
                <a 
                  href="https://wa.me/34600000000?text=Hola%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20tus%20servicios" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <MessageCircle size={16} className="sm:w-4 sm:h-4 shrink-0" />
                  WhatsApp
                </a>
                <div className="flex gap-3 sm:gap-4 mt-1 sm:mt-2">
                  <a 
                    href="https://instagram.com/jperformancesystems" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} className="sm:w-5 sm:h-5" />
                  </a>
                  <a 
                    href="https://tiktok.com/@jperformancesystems" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="TikTok"
                  >
                    <SiTiktok size={20} className="sm:w-5 sm:h-5" />
                  </a>
                  <a 
                    href="https://t.me/jperformancesystems" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Telegram"
                  >
                    <Send size={20} className="sm:w-5 sm:h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-6 sm:mt-7 md:mt-8 pt-5 sm:pt-6 md:pt-8 text-center text-xs sm:text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} J Performance Systems. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
