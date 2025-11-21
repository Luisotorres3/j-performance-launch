import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { SiTiktok, SiWhatsapp, SiTelegram } from "react-icons/si";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

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
<<<<<<< HEAD
            <Link to="/" className="flex items-center gap-2 sm:gap-3 text-lg sm:text-2xl font-bold text-foreground" onClick={() => window.scrollTo(0, 0)}>
              <img src={logo} alt="J Performance logo" className="h-12 sm:h-14 md:h-16 w-auto inline-block" />
=======
            <Link
              to="/"
              className="flex items-center gap-2 sm:gap-3 text-lg sm:text-2xl font-bold text-foreground"
            >
              <img
                src={logo}
                alt="J Performance logo"
                className="h-12 sm:h-14 md:h-16 w-auto inline-block"
              />
>>>>>>> 4892249563441a230b94e7d4223864d40e5ed286
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
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild size="sm">
                <Link to="/contacto" onClick={() => window.scrollTo(0, 0)}>Comenzar</Link>
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

<<<<<<< HEAD
      {/* Mobile Navigation - Full screen overlay with smooth transitions */}
      <div 
        className={`fixed left-0 right-0 bottom-0 md:hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ top: '64px', zIndex: 60 }}
      >
        {/* Backdrop with smooth fade */}
        <div 
          className={`absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/50 backdrop-blur-lg transition-opacity duration-500 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsOpen(false)}
        />
        
        {/* Menu panel with smooth slide */}
        <div className={`absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 overflow-y-auto transition-transform duration-500 ease-out ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}>
          <div className="container mx-auto px-4 py-4 min-h-full flex flex-col">
            {/* Navigation Links */}
            <div className="flex-1 flex flex-col justify-center gap-2 py-2">
              {links.map((link, index) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-xl font-bold transition-all duration-300 px-5 py-4 rounded-xl text-foreground active:scale-95 flex items-center gap-3"
                  onClick={() => { setIsOpen(false); window.scrollTo(0, 0); }}
                  style={{ 
                    transitionDelay: isOpen ? `${index * 60}ms` : '0ms',
                    transform: isOpen ? 'translateX(0)' : 'translateX(-20px)',
                    opacity: isOpen ? 1 : 0
                  }}
=======
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
>>>>>>> 4892249563441a230b94e7d4223864d40e5ed286
                >
                  <span className="text-2xl">{link.emoji}</span>
                  {link.label}
                </Link>
              ))}
              
              {/* Social Media Links */}
              <div 
                className="flex items-center justify-center gap-3 mt-4 pt-4 border-t border-border/30"
                style={{ 
                  transitionDelay: isOpen ? `${links.length * 60}ms` : '0ms',
                  transform: isOpen ? 'translateX(0)' : 'translateX(-20px)',
                  opacity: isOpen ? 1 : 0,
                  transition: 'all 300ms ease-out'
                }}
              >
                <a 
                  href="https://instagram.com/jperformancesystems" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 text-foreground rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300 active:scale-95"
                  aria-label="Instagram"
                >
                  <Instagram size={22} />
                </a>
                <a 
                  href="https://tiktok.com/@jperformancesystems" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 text-foreground rounded-full bg-gradient-to-r from-cyan-500/20 to-pink-500/20 hover:from-cyan-500/30 hover:to-pink-500/30 transition-all duration-300 active:scale-95"
                  aria-label="TikTok"
                >
                  <SiTiktok size={20} />
                </a>
                <a 
                  href="https://wa.me/34600000000?text=Hola%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20tus%20servicios" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 text-foreground rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 hover:from-green-500/30 hover:to-emerald-500/30 transition-all duration-300 active:scale-95"
                  aria-label="WhatsApp"
                >
                  <SiWhatsapp size={22} />
                </a>
                <a 
                  href="https://t.me/jperformancesystems" 
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
                transitionDelay: isOpen ? '400ms' : '0ms',
                transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: isOpen ? 1 : 0,
                transition: 'all 500ms ease-out'
              }}
            >
              <Button 
                asChild 
                size="lg" 
                className="w-full text-lg font-bold py-6 rounded-2xl shadow-2xl shadow-primary/50 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] hover:bg-[position:100%_0] transition-all duration-700 transform hover:scale-105 active:scale-95 hover:shadow-primary/70 hover:shadow-3xl"
              >
                <Link to="/contacto" onClick={() => { setIsOpen(false); window.scrollTo(0, 0); }}>
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
