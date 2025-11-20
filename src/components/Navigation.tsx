import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: "Inicio" },
    { to: "/planes", label: "Planes" },
    { to: "/reviews", label: "Mis clientes" },
    { to: "/blog", label: "Blog" },
    { to: "/contacto", label: "Contacto" },
  ];

  const isActive = (path: string) => {
    // For home page, match exactly
    if (path === "/") {
      return location.pathname === "/" || location.pathname === "";
    }
    // For other pages, check if pathname starts with the path
    return location.pathname === path;
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b-2 border-border shadow-sm">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 sm:gap-3 text-lg sm:text-2xl font-bold text-foreground"
            >
              <img
                src={logo}
                alt="J Performance logo"
                className="h-12 sm:h-14 md:h-16 w-auto inline-block"
              />
              <span>
                <span className="text-primary">J</span> Performance System
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm font-medium transition-all duration-200 hover:text-primary hover:scale-105 relative pb-1 ${
                    isActive(link.to)
                      ? "text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary"
                      : "text-muted-foreground hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:right-0 hover:after:h-0.5 hover:after:bg-primary/50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild size="sm">
                <Link to="/contacto">Comenzar</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground p-2 hover:bg-muted rounded-lg transition-colors relative z-[70]"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Full screen overlay - Outside nav for proper z-index */}
      {isOpen && (
        <div
          className="fixed left-0 right-0 bottom-0 md:hidden"
          style={{ top: "64px", zIndex: 60 }}
        >
          {/* Backdrop with animation */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/40 backdrop-blur-md animate-in fade-in duration-300"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu panel with slide animation */}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/30 animate-in slide-in-from-top duration-300 overflow-y-auto">
            <div className="container mx-auto px-6 py-8 min-h-full flex flex-col">
              {/* Navigation Links */}
              <div className="flex-1 flex flex-col justify-center gap-2">
                {links.map((link, index) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`text-xl font-semibold transition-all duration-300 px-8 py-5 rounded-2xl transform hover:scale-105 active:scale-95 ${
                      isActive(link.to)
                        ? "text-primary bg-gradient-to-r from-primary/15 via-primary/10 to-primary/5 border-l-4 border-primary shadow-lg shadow-primary/20"
                        : "text-foreground hover:bg-gradient-to-r hover:from-muted hover:to-transparent hover:text-primary hover:border-l-4 hover:border-primary/50"
                    } animate-in slide-in-from-left duration-300`}
                    onClick={() => setIsOpen(false)}
                    style={{
                      animationDelay: `${index * 0.08}s`,
                      animationFillMode: "backwards",
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* CTA Button at bottom */}
              <div
                className="mt-8 px-2 animate-in slide-in-from-bottom duration-500"
                style={{ animationDelay: "0.4s", animationFillMode: "backwards" }}
              >
                <Button
                  asChild
                  size="lg"
                  className="w-full text-lg py-7 rounded-2xl shadow-2xl shadow-primary/30 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                  <Link to="/contacto" onClick={() => setIsOpen(false)}>
                    Comenzar Ahora
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
