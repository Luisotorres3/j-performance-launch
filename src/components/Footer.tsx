import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">
              <span className="text-blue-600">J</span> Performance System
            </h3>
            <p className="text-gray-600 text-sm">
              Transforma tu cuerpo y mente con programas de entrenamiento personalizados diseñados para el máximo rendimiento.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900">Enlaces Rápidos</h4>
            <div className="flex flex-col gap-2">
              <Link to="/planes" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                Planes
              </Link>
              <Link to="/ahorra" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                Ahorra
              </Link>
              <Link to="/actualizate" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                Actualízate
              </Link>
              <Link to="/opiniones" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                Opiniones
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900">Contacto</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:info@jperformance.com" className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors">
                <Mail size={16} />
                info@jperformance.com
              </a>
              <a href="tel:+34600000000" className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors">
                <Phone size={16} />
                +34 600 000 000
              </a>
              <div className="flex gap-4 mt-2">
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} J Performance System. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
