import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ClientsSection from "@/components/ClientsSection";
import clients from "@/data/clients";
import { Helmet } from "react-helmet-async";

const Reviews = () => {
  // use clients list as the 'Con quién he trabajado' content

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Testimonios y Clientes | J Performance System</title>
        <meta
          name="description"
          content="Conoce a los deportistas y atletas que han mejorado su rendimiento con nuestros programas de entrenamiento personalizado y análisis biomecánico."
        />
        <meta property="og:title" content="Testimonios y Clientes | J Performance System" />
        <meta property="og:description" content="Conoce a los deportistas y atletas que han mejorado su rendimiento con nuestros programas de entrenamiento personalizado y análisis biomecánico." />
        <meta property="og:url" content="https://luisotorres3.github.io/j-performance-launch/#/reviews" />
        <meta name="twitter:title" content="Testimonios y Clientes | J Performance System" />
        <meta name="twitter:description" content="Conoce a los deportistas y atletas que han mejorado su rendimiento con nuestros programas de entrenamiento personalizado y análisis biomecánico." />
      </Helmet>
      <Navigation />

      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-section-alt">
        <div className="container mx-auto px-4">
          <ClientsSection clients={clients} />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reviews;
