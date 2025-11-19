// Lista de clientes (placeholders).
// Sustituye `photo` por la import real después de añadir las imágenes en `src/assets/clients/`.

import c1 from '@/assets/clients/cliente-1.jpg';
import c2 from '@/assets/clients/cliente-2.jpg';
import c3 from '@/assets/clients/cliente-3.jpg';
import c4 from '@/assets/clients/cliente-4.jpg';
import c5 from '@/assets/clients/cliente-5.jpg';

export const clients = [
  {
    id: 1,
    name: 'Iván Suárez',
    role: 'Delantero',
    clubs: 'Deportivo La Coruña',
    duration: '2021–2023',
    photo: c1,
    miniCV: 'Goleador joven, pieza clave en la fase ofensiva del equipo juvenil y ascensos.',
  },
  {
    id: 2,
    name: 'Miguel Ortega',
    role: 'Extremo',
    clubs: 'Atlético Norte',
    duration: '2020–2024',
    photo: c2,
    miniCV: 'Velocidad y desborde; convocado a selecciones juveniles y destacadas asistencias.',
  },
  {
    id: 3,
    name: 'Lucas Fernández',
    role: 'Mediapunta',
    clubs: 'Deportivo La Coruña',
    duration: '2022–2025',
    photo: c3,
    miniCV: 'Creatividad en tres cuartos de campo y gran llegada al área rival.',
  },
  {
    id: 4,
    name: 'Pablo García',
    role: 'Centrocampista',
    clubs: 'Club Atlético',
    duration: '2019–2022',
    photo: c4,
    miniCV: 'Organizador del juego, excelente visión y control del tempo del partido.',
  },
  {
    id: 5,
    name: 'Diego Ramos',
    role: 'Defensa',
    clubs: 'Real Norte',
    duration: '2020–2023',
    photo: c5,
    miniCV: 'Solidez defensiva, buen juego aéreo y liderazgo en la zaga.',
  },
];

export default clients;
