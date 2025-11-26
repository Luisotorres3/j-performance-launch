import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { SiTiktok, SiWhatsapp, SiTelegram } from "react-icons/si";
import { CONTACT_INFO } from "@/constants/contact";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const links = [
    { to: "/", label: "Inicio", emoji: "🏠" },
    { to: "/planes", label: "Planes", emoji: "💪" },
    { to: "/reviews", label: "Mis clientes", emoji: "⭐" },
    { to: "/blog", label: "Blog", emoji: "📝" },
    { to: "/contacto", label: "Contacto", emoji: "📧" },
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
              onClick={() => window.scrollTo(0, 0)}
            >
              <img
                src={logo}
                alt="J Performance logo"
                className="h-16 sm:h-20 md:h-24 w-auto inline-block"
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
                  className={`text-sm font-medium transition-all duration-200 hover:text-primary hover:scale-105 relative pb-1 ${isActive(link.to)
                      ? "text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary"
                      : "text-muted-foreground hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:right-0 hover:after:h-0.5 hover:after:bg-primary/50"
                    }`}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild size="sm">
                <Link to="/contacto" onClick={() => window.scrollTo(0, 0)}>
                  Comenzar
                </Link>
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

      {/* Mobile Navigation - Full screen overlay with smooth transitions */}
      <div
        className={`fixed left-0 right-0 bottom-0 md:hidden transition-all duration-500 ease-in-out ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        style={{ top: "64px", zIndex: 60 }}
      >
        {/* Backdrop with smooth fade */}
        <div
          className={`absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/50 backdrop-blur-lg transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"
            }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Menu panel with smooth slide */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 overflow-y-auto transition-transform duration-500 ease-out ${isOpen ? "translate-y-0" : "-translate-y-full"
            }`}
        >
          <div className="container mx-auto px-4 py-4 min-h-full flex flex-col">
            {/* Navigation Links */}
            <div className="flex-1 flex flex-col justify-center gap-2 py-2">
              {links.map((link, index) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-xl font-bold transition-all duration-300 px-5 py-4 rounded-xl text-foreground active:scale-95 flex items-center gap-3"
                  onClick={() => {
                    setIsOpen(false);
                    window.scrollTo(0, 0);
                  }}
                  style={{
                    transitionDelay: isOpen ? `${index * 60}ms` : "0ms",
                    transform: isOpen ? "translateX(0)" : "translateX(-20px)",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <span className="text-2xl">{link.emoji}</span>
                  {link.label}
                </Link>
              ))}

              {/* Social Media Links */}
              <div
                className="flex items-center justify-center gap-3 mt-4 pt-4 border-t border-border/30"
                style={{
                  transitionDelay: isOpen ? `${links.length * 60}ms` : "0ms",
                  transform: isOpen ? "translateX(0)" : "translateX(-20px)",
                  opacity: isOpen ? 1 : 0,
                  transition: "all 300ms ease-out",
                }}
              >
                <a
                  href={CONTACT_INFO.social.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 text-foreground rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300 active:scale-95"
                  aria-label="Instagram"
                >
                  <Instagram size={22} />
                </a>
                <a
                  href={CONTACT_INFO.social.tiktok.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 text-foreground rounded-full bg-gradient-to-r from-cyan-500/20 to-pink-500/20 hover:from-cyan-500/30 hover:to-pink-500/30 transition-all duration-300 active:scale-95"
                  aria-label="TikTok"
                >
                  <SiTiktok size={20} />
                </a>
                <a
                  href={CONTACT_INFO.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 text-foreground rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 hover:from-green-500/30 hover:to-emerald-500/30 transition-all duration-300 active:scale-95"
                  aria-label="WhatsApp"
                >
                  <SiWhatsapp size={22} />
                </a>
                <a
                  href={CONTACT_INFO.social.telegram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 text-foreground rounded-full bg-gradient-to-r from-blue-500/20 to-sky-500/20 hover:from-blue-500/30 hover:to-sky-500/30 transition-all duration-300 active:scale-95"
                  aria-label="Telegram"
                >
                  <SiTelegram size={22} />
                </a>
              </div>
            </div>

            {/* CTA Button at bottom with glow effect */}
            <div
              className="mt-auto px-2 pb-2"
              style={{
                transitionDelay: isOpen ? "400ms" : "0ms",
                transform: isOpen ? "translateY(0)" : "translateY(20px)",
                opacity: isOpen ? 1 : 0,
                transition: "all 500ms ease-out",
              }}
            >
              <Button
                asChild
                size="lg"
                className="w-full text-lg font-bold py-6 rounded-2xl shadow-2xl shadow-primary/50 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] hover:bg-[position:100%_0] transition-all duration-700 transform hover:scale-105 active:scale-95 hover:shadow-primary/70 hover:shadow-3xl"
              >
                <Link
                  to="/contacto"
                  onClick={() => {
                    setIsOpen(false);
                    window.scrollTo(0, 0);
                  }}
                >
                  <span className="relative z-10">Comenzar Ahora</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
