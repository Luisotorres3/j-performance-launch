import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, Phone } from "lucide-react";
import logoImg from "@/assets/logo.png";
import SectionSeparator from "@/components/SectionSeparator";

const Footer = () => {
  return (
    <>
      <SectionSeparator />
      <footer className="bg-muted border-t border-border py-6 sm:py-8 md:py-12">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            {/* Brand */}
            <div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 md:mb-4">
                <span className="text-primary">J</span> Performance Systems
              </h3>

              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3 md:mb-4">
                Transforma tu cuerpo y mente con programas de entrenamiento personalizados diseñados
                para un rendimiento óptimo.
              </p>
              <img
                src={logoImg}
                alt="J Performance Systems Logo"
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 object-contain"
              />
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-2 sm:mb-3 md:mb-4 text-xs sm:text-sm md:text-base">
                Enlaces rápidos
              </h4>
              <div className="flex flex-col gap-1.5 sm:gap-2 md:gap-3">
                <Link
                  to="/planes"
                  onClick={() => window.scrollTo(0, 0)}
                  className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors min-h-[32px]"
                >
                  Planes de entrenamiento
                </Link>
                <Link
                  to="/blog"
                  onClick={() => window.scrollTo(0, 0)}
                  className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors min-h-[32px]"
                >
                  Blog
                </Link>
                <Link
                  to="/reviews"
                  onClick={() => window.scrollTo(0, 0)}
                  className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors min-h-[32px]"
                >
                  Mis clientes
                </Link>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-2 sm:mb-3 md:mb-4 text-xs sm:text-sm md:text-base">
                Contacto
              </h4>
              <div className="flex flex-col gap-1.5 sm:gap-2 md:gap-3">
                <a
                  href="mailto:info@jperformance.com"
                  className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors break-all min-h-[32px]"
                >
                  <Mail size={14} className="sm:w-4 sm:h-4 shrink-0" />
                  info@jperformance.com
                </a>
                <a
                  href="tel:+34600000000"
                  className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors min-h-[32px]"
                >
                  <Phone size={14} className="sm:w-4 sm:h-4 shrink-0" />
                  +34 600 000 000
                </a>
                <div className="flex gap-3 sm:gap-4 mt-1 sm:mt-2">
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center -ml-2"
                  >
                    <Instagram size={20} className="sm:w-5 sm:h-5" />
                  </a>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                  >
                    <Facebook size={20} className="sm:w-5 sm:h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-5 sm:mt-6 md:mt-8 pt-5 sm:pt-6 md:pt-8 text-center text-xs sm:text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} J Performance Systems. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
