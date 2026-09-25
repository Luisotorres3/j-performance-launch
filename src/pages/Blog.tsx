import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
export default function Blog() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="editorial-empty v2-container">
        <p className="eyebrow">J PERFORMANCE / CUADERNO DE ENTRENAMIENTO</p>
        <h1>
          El conocimiento
          <br />
          <span className="muted-type">también se entrena.</span>
        </h1>
        <p>
          Estoy preparando contenido sobre entrenamiento y nutrición. Pronto encontrarás aquí el
          blog de J Performance System.
        </p>
        <span className="coming-label">PRÓXIMAMENTE</span>
        <Link to="/planes" className="text-button">
          Mientras tanto, encuentra tu plan <ArrowUpRight size={20} />
        </Link>
      </main>
      <Footer />
    </>
  );
}
