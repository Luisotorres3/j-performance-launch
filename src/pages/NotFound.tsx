import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";
export default function NotFound() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="editorial-empty v2-container">
        <p className="eyebrow">ERROR / 404</p>
        <h1>Página no encontrada</h1>
        <p>La página que buscas no existe. Tu siguiente paso sí.</p>
        <div className="hero-actions">
          <Link to="/" className="v2-button">
            Ir al inicio <ArrowUpRight size={18} />
          </Link>
          <Link to="/planes" className="text-button">
            Ver planes <ArrowUpRight size={18} />
          </Link>
          <Link to="/contacto" className="text-button">
            Contacto
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
