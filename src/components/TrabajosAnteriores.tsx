
const athletes = [
  {
    name: "Nombre del Deportista 1",
    role: "Fútbol - Delantero",
    imageUrl: "https://via.placeholder.com/300",
    achievements: [
      "Equipo A (2020-2022)",
      "Campeón de Liga (2021)",
      "Máximo goleador del equipo (2022)",
    ],
  },
  {
    name: "Nombre de la Deportista 2",
    role: "Baloncesto - Base",
    imageUrl: "https://via.placeholder.com/300",
    achievements: [
      "Equipo B (2019-2023)",
      "Campeona de Copa (2022)",
      "Selección Nacional Sub-21",
    ],
  },
  {
    name: "Nombre del Atleta 3",
    role: "Atletismo - 100m",
    imageUrl: "https://via.placeholder.com/300",
    achievements: [
      "Medalla de Oro Nacional (2023)",
      "Récord personal: 9.98s",
      "Participación en campeonatos europeos",
    ],
  },
];

const TrabajosAnteriores = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Con quién he trabajado anteriormente
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            He tenido el privilegio de trabajar con atletas de élite y ayudarlos a alcanzar su máximo potencial.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {athletes.map((athlete, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={athlete.imageUrl}
                alt={athlete.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {athlete.name}
                </h3>
                <p className="text-base text-blue-600 font-semibold mb-4">
                  {athlete.role}
                </p>
                <ul className="space-y-2">
                  {athlete.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <svg
                        className="w-4 h-4 mr-2 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrabajosAnteriores;
