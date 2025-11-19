import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";

const Blog = () => {
  const blogPosts = [
    {
      title: "La ciencia de la sobrecarga progresiva en el entrenamiento de fuerza",
      excerpt: "Descubre cómo la sobrecarga progresiva es el principio fundamental detrás del crecimiento muscular y las ganancias de fuerza. Aprende estrategias prácticas para aplicarla en tu rutina.",
      date: "15 de mayo de 2024",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=450&fit=crop",
      slug: "progressive-overload-strength-training",
    },
    {
      title: "Timing de la nutrición: ¿realmente importa?",
      excerpt: "Explora la investigación sobre el momento de la ingesta y averigua si comer en horarios específicos puede mejorar tu rendimiento y recuperación.",
      date: "10 de mayo de 2024",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=450&fit=crop",
      slug: "nutrition-timing-guide",
    },
    {
      title: "Entendiendo la biomecánica para mejorar el rendimiento",
      excerpt: "Aprende cómo conocer la biomecánica de tu cuerpo puede ayudarte a levantar con más eficiencia, prevenir lesiones y maximizar tus resultados.",
      date: "5 de mayo de 2024",
      image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&h=450&fit=crop",
      slug: "biomechanics-performance",
    },
    {
      title: "5 errores comunes de entrenamiento que limitan tu progreso",
      excerpt: "Identifica y corrige estos errores frecuentes que pueden impedirte alcanzar tu máximo potencial en el gimnasio.",
      date: "28 de abril de 2024",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=450&fit=crop",
      slug: "common-training-mistakes",
    },
    {
      title: "Construyendo resiliencia mental para el éxito atlético",
      excerpt: "La fortaleza mental es tan importante como la física. Aprende estrategias para desarrollar la resiliencia necesaria para el rendimiento óptimo.",
      date: "20 de abril de 2024",
      image: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=800&h=450&fit=crop",
      slug: "mental-resilience-athletes",
    },
    {
      title: "Guía completa de recuperación y días de descanso",
      excerpt: "La recuperación es donde ocurre la adaptación. Entiende la importancia de los días de descanso y aprende cómo optimizarlos para mejores resultados.",
      date: "15 de abril de 2024",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=450&fit=crop",
      slug: "recovery-rest-guide",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20 bg-section-alt">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">
              Consejos de <span className="text-primary">entrenamiento</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Artículos de expertos sobre entrenamiento, nutrición y optimización del rendimiento para ayudarte a alcanzar tus objetivos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.05}s` }}>
                <BlogCard {...post} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
