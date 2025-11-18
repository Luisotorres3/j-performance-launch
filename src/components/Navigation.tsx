import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: "Inicio" },
    { to: "/planes", label: "Planes" },
    { to: "/ahorra", label: "Ahorra" },
    { to: "/actualizate", label: "Actualízate" },
    { to: "/opiniones", label: "Opiniones" },
    { to: "/contacto", label: "Contacto" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-gray-900">
            <span className="text-blue-600">J</span> Performance System
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  isActive(link.to) ? "text-blue-600" : "text-gray-500"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link to="/contact">Empezar ahora</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    isActive(link.to) ? "text-blue-600" : "text-gray-500"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Empezar ahora
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
