import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import PlansSection from "@/components/v2/PlansSection";
export default function TrainingPlans() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <PlansSection standalone />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
