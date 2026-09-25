import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChallengesSection from "@/components/v2/ChallengesSection";

export default function Challenges() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="challenges-page">
        <ChallengesSection standalone />
      </main>
      <Footer />
    </>
  );
}
