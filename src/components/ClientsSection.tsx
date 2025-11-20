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
    <section className="pt-2 pb-12 sm:pb-16 md:pb-24 bg-background">
      <div className="container mx-auto px-4 max-w-[1600px]">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-2">Con quién he trabajado anteriormente</h1>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto mt-2 sm:mt-3 px-4">Jugadores que han mejorado su rendimiento a través de nuestro programa de entrenamiento.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {clients.map((c) => (
            <article key={c.id} className="bg-card rounded-2xl border-[3px] border-muted-foreground/30 overflow-hidden hover:border-primary transition-all duration-300 group shadow-md hover:shadow-2xl hover:shadow-primary/10">
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                {c.photo ? (
                  <img src={c.photo} alt={c.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-xs sm:text-sm text-muted-foreground">Imagen</div>
                )}
              </div>

              <div className="p-3 sm:p-4 md:p-5">
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">{c.name}</h3>
                {c.role && <div className="text-xs sm:text-sm text-primary font-semibold mb-1">{c.role}</div>}
                {c.clubs && <div className="text-xs sm:text-sm text-muted-foreground font-medium mb-1">{c.clubs}</div>}
                {c.duration && <div className="text-xs text-muted-foreground mb-2 sm:mb-3">{c.duration}</div>}
                {c.miniCV && (
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-border">
                    {c.miniCV}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
