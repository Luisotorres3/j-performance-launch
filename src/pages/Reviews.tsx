import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ClientsSection from "@/components/ClientsSection";
import clients from "@/data/clients";

const Reviews = () => {
  // use clients list as the 'Con quién he trabajado' content

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20 bg-section-alt">
        <div className="container mx-auto px-4">
          <ClientsSection clients={clients} />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reviews;
