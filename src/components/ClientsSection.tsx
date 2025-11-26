export interface Client {
  id: string | number;
  name: string;
  currentClub?: string; // Equipo actual
  previousClubs?: string[]; // Lista de equipos anteriores
  photo?: string; // url or import path
}

interface Props {
  clients?: Client[];
}

const placeholderClients: Client[] = [
  {
    id: 1,
    name: "Nombre Apellido",
    currentClub: "Club A",
    previousClubs: ["Club B", "Club C"],
    photo: "",
  },
  {
    id: 2,
    name: "Nombre Apellido",
    currentClub: "Club X",
    previousClubs: ["Club Y"],
    photo: "",
  },
  {
    id: 3,
    name: "Nombre Apellido",
    currentClub: "Club Z",
    previousClubs: ["Club A", "Club B"],
    photo: "",
  },
];

const ClientsSection = ({ clients = placeholderClients }: Props) => {
  return (
    <section className="pt-2 pb-12 sm:pb-16 md:pb-24 bg-background">
      <div className="container mx-auto px-3 sm:px-4 max-w-[1600px]">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-2">
            Con quién he trabajado anteriormente
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto mt-2 sm:mt-3 px-4">
            Jugadores que han mejorado su rendimiento a través de nuestro programa de entrenamiento.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {clients.map((c) => (
            <article
              key={c.id}
              className="bg-card rounded-2xl border-[3px] border-muted-foreground/30 overflow-hidden hover:border-primary transition-all duration-300 group shadow-md hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                {c.photo ? (
                  <img
                    src={c.photo}
                    alt={c.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-xs sm:text-sm text-muted-foreground">
                    Imagen
                  </div>
                )}
              </div>

              <div className="p-3 sm:p-4 md:p-5">
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3">{c.name}</h3>
                {c.currentClub && (
                  <div className="text-sm sm:text-base text-blue-600 dark:text-blue-400 font-semibold mb-2 sm:mb-3">
                    {c.currentClub}
                  </div>
                )}
                {c.previousClubs && c.previousClubs.length > 0 && (
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    <div className="font-medium mb-1">Equipos anteriores:</div>
                    <ul className="list-disc list-inside space-y-0.5">
                      {c.previousClubs.map((club, idx) => (
                        <li key={idx}>{club}</li>
                      ))}
                    </ul>
                  </div>
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
