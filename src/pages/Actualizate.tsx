import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    title: "La ciencia de la sobrecarga progresiva en el entrenamiento de fuerza",
    excerpt: "Descubre cómo la sobrecarga progresiva es el principio fundamental detrás del crecimiento muscular y las ganancias de fuerza. Aprende estrategias prácticas para implementarla en tu rutina.",
    date: "15 de mayo de 2024",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=450&fit=crop",
    slug: "sobrecarga-progresiva-entrenamiento-fuerza",
  },
  {
    title: "El timing de la nutrición: ¿Realmente importa?",
    excerpt: "Explora las últimas investigaciones sobre el timing de los nutrientes y aprende si comer en momentos específicos puede mejorar tu rendimiento y recuperación.",
    date: "10 de mayo de 2024",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=450&fit=crop",
    slug: "guia-timing-nutricion",
  },
  {
    title: "Entendiendo la biomecánica para un mejor rendimiento",
    excerpt: "Aprende cómo entender la biomecánica de tu cuerpo puede ayudarte a levantar más eficientemente, prevenir lesiones y maximizar tus resultados.",
    date: "5 de mayo de 2024",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&h=450&fit=crop",
    slug: "biomecanica-rendimiento",
  },
];

const BlogCard = ({ post }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
    <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
    <div className="p-6 flex flex-col flex-grow">
      <p className="text-sm text-gray-500 mb-2">{post.date}</p>
      <h3 className="text-xl font-bold text-gray-900 mb-4 flex-grow">{post.title}</h3>
      <p className="text-gray-600 mb-4">{post.excerpt}</p>
      <Button variant="outline" className="mt-auto w-full">
        Leer más
      </Button>
    </div>
  </div>
);

const Actualizate = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Actualízate
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Artículos expertos sobre entrenamiento, nutrición y optimización del rendimiento para ayudarte a alcanzar tus objetivos.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Actualizate;
