import React from "react";
import { Link } from "react-router-dom";

export interface Client {
  id: string | number;
  name: string;
  role?: string; // e.g., "Jugador profesional", "Entrenador"
  clubs?: string; // e.g., "Real Madrid, Barcelona"
  duration?: string; // e.g., "2021–2023"
  photo?: string; // url or import path
  miniCV?: string; // short bio / where they played
}

interface Props {
  clients?: Client[];
}

const placeholderClients: Client[] = [
  { id: 1, name: "Nombre Apellido", role: "Jugador", clubs: "Club A, Club B", photo: "", miniCV: "Breve trayectoria deportiva." },
  { id: 2, name: "Nombre Apellido", role: "Entrenador", clubs: "Club X", photo: "", miniCV: "Breve trayectoria como entrenador." },
  { id: 3, name: "Nombre Apellido", role: "Jugador", clubs: "Club Y, Club Z", photo: "", miniCV: "Breve trayectoria deportiva." },
];

const ClientsSection: React.FC<Props> = ({ clients = placeholderClients }) => {
  return (
    <section className="pt-24 pb-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Con quién he trabajado anteriormente</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-3">A continuación algunos atletas y profesionales con los que he colaborado. Pásame las fotos y un mini-CV y los añado aquí con diseño potente.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {clients.map((c) => (
            <article key={c.id} className="bg-card rounded-lg p-4 border border-border shadow-sm hover:shadow-glow transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="w-36 h-36 md:w-48 md:h-48 rounded-2xl overflow-hidden bg-muted flex items-center justify-center">
                {c.photo ? (
                  <img src={c.photo} alt={c.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="text-sm text-muted-foreground">Imagen</div>
                )}
              </div>

              <div className="mt-4">
                <div className="text-lg md:text-xl font-semibold">{c.name}</div>
                {c.clubs && <div className="text-sm text-primary mt-1">{c.clubs}</div>}
                {c.role && <div className="text-sm text-muted-foreground mt-1">{c.role} • {c.duration ?? ''}</div>}
              </div>

              {c.miniCV && (
                <div className="mt-3 text-sm text-muted-foreground">{c.miniCV}</div>
              )}

              <div className="mt-4">
                <Link to="#" className="text-sm text-primary hover:underline">Ver más</Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>Para añadir clientes reales, pásame las fotos (preferible 800×800) y un mini-CV (1-2 líneas con equipos/temporadas). Puedo incorporarlos aquí y ajustar el diseño.</p>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
