import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Página No Encontrada | J Performance System</title>
        <meta name="description" content="La página que buscas no existe. Vuelve al inicio para encontrar planes de entrenamiento personalizado y servicios de entrenador personal." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Navigation />
      <div className="flex min-h-[calc(100vh-80px)] items-center justify-center pt-20 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto animate-fade-in">
            <div className="mb-8">
              <h1 className="text-9xl font-bold text-primary/20 mb-4">404</h1>
              <h2 className="text-4xl font-bold mb-4">Página no encontrada</h2>
              <p className="text-xl text-muted-foreground mb-8">
                ¡Vaya! La página que buscas no existe. Puede que se haya movido, eliminado o que la URL sea incorrecta.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="shadow-glow">
                <Link to="/">
                  <Home className="mr-2 h-4 w-4" />
                  Ir al inicio
                </Link>
              </Button>
              <Button size="lg" variant="outline" onClick={() => window.history.back()}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver
              </Button>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Quizá buscas:</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/planes" className="text-sm text-primary hover:underline">
                  Planes de entrenamiento
                </Link>
                <Link to="/packs" className="text-sm text-primary hover:underline">
                  Packs especiales
                </Link>
                <Link to="/blog" className="text-sm text-primary hover:underline">
                  Blog
                </Link>
                <Link to="/reviews" className="text-sm text-primary hover:underline">
                  Con quien he trabajado
                </Link>
                <Link to="/contacto" className="text-sm text-primary hover:underline">
                  Contacto
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
