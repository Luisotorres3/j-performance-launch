import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, Phone } from "lucide-react";
import logoImg from "@/assets/logo.png";
import SectionSeparator from "@/components/SectionSeparator";

const Footer = () => {
  return (
    <>
      <SectionSeparator />
      <footer className="bg-muted border-t border-border py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Brand */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                <span className="text-primary">J</span> Performance Systems
              </h3>
              
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                Transforma tu cuerpo y mente con programas de entrenamiento personalizados diseñados para un rendimiento óptimo.
              </p>
              <img 
                src={logoImg} 
                alt="J Performance Systems Logo" 
                className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
              />
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Enlaces rápidos</h4>
              <div className="flex flex-col gap-2 sm:gap-3">
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

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contacto</h4>
              <div className="flex flex-col gap-2 sm:gap-3">
                <a href="mailto:info@jperformance.com" className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors break-all">
                  <Mail size={14} className="sm:w-4 sm:h-4 shrink-0" />
                  info@jperformance.com
                </a>
                <a href="tel:+34600000000" className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Phone size={14} className="sm:w-4 sm:h-4 shrink-0" />
                  +34 600 000 000
                </a>
                <div className="flex gap-3 sm:gap-4 mt-2">
                  <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Instagram size={18} className="sm:w-5 sm:h-5" />
                  </a>
                  <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Facebook size={18} className="sm:w-5 sm:h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} J Performance Systems. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
