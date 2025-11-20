import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Construction, Lock } from "lucide-react";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20 min-h-[calc(100vh-200px)] flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-section-alt via-background to-section-alt">
        {/* Blurred background content */}
        <div className="absolute inset-0 blur-[8px] opacity-30 select-none pointer-events-none">
          <div className="container mx-auto px-4 pt-20">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-card rounded-2xl p-6 h-64 animate-pulse">
                  <div className="bg-muted h-32 rounded-lg mb-4"></div>
                  <div className="bg-muted h-4 rounded mb-2"></div>
                  <div className="bg-muted h-4 rounded w-2/3"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mb-8 animate-pulse">
            <Construction className="w-12 h-12 text-primary" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
            Próximamente
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Estamos preparando contenido exclusivo de entrenamiento y nutrición
          </p>

          <div className="flex items-center justify-center gap-3 text-muted-foreground">
            <Lock className="w-5 h-5" />
            <span className="text-lg font-medium">Sección en construcción</span>
          </div>

          <div className="mt-12 flex gap-2 justify-center">
            <div className="w-3 h-3 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0s' }}></div>
            <div className="w-3 h-3 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-3 h-3 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
