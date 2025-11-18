import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-primary">J</span> Performance Systems
            </h3>
            <p className="text-muted-foreground text-sm">
              Transform your body and mind with personalized training programs designed for peak performance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/training-plans" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Training Plans
              </Link>
              <Link to="/packs" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Special Packs
              </Link>
              <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Blog
              </Link>
              <Link to="/reviews" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Reviews
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:info@jperformance.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail size={16} />
                info@jperformance.com
              </a>
              <a href="tel:+34600000000" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone size={16} />
                +34 600 000 000
              </a>
              <div className="flex gap-4 mt-2">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} J Performance Systems. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
