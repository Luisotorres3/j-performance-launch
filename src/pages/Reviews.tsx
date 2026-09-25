import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import clients from "@/data/clients";
import FinalCTA from "@/components/v2/FinalCTA";
import AthleteMedia from "@/components/v2/AthleteMedia";
export default function Footballers() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <section className="inner-page v2-container">
          <div className="inner-page-title">
            <h1>Clientes</h1>
            <p>Clientes con los que he trabajado.</p>
          </div>
          <div className="clients-grid-v2">
            {clients.map((client, i) => (
              <article key={client.id}>
                <AthleteMedia client={client} index={i} />
                <div className="athlete-caption">
                  <div>
                    <h2 className="text-2xl font-medium">{client.name}</h2>
                  </div>
                </div>
                {client.source && (
                  <a
                    className="client-source"
                    href={client.source.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Fuente de la foto ↗
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
