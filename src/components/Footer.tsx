import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, Phone } from "lucide-react";
import logoImg from "@/assets/logo.png";
import SectionSeparator from "@/components/SectionSeparator";

const Footer = () => {
  return (
    <>
      <SectionSeparator />
      <footer className="bg-muted border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold mb-4">
                <span className="text-primary">J</span> Performance Systems
              </h3>

              <p className="text-muted-foreground text-sm">
                Transforma tu cuerpo y mente con programas de entrenamiento personalizados diseñados
                para un rendimiento óptimo.
              </p>
              <img
                src={logoImg}
                alt="J Performance Systems Logo"
                className="w-16 h-16 object-contain mb-4"
              />
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Enlaces rápidos</h4>
              <div className="flex flex-col gap-3">
                <Link
                  to="/planes"
                  onClick={() => window.scrollTo(0, 0)}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Planes de entrenamiento
                </Link>
                <Link
                  to="/blog"
                  onClick={() => window.scrollTo(0, 0)}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Blog
                </Link>
                <Link
                  to="/reviews"
                  onClick={() => window.scrollTo(0, 0)}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Mis clientes
                </Link>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:info@jperformance.com"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail size={16} />
                  info@jperformance.com
                </a>
                <a
                  href="tel:+34600000000"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone size={16} />
                  +34 600 000 000
                </a>
                <div className="flex gap-4 mt-2">
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Facebook size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
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
