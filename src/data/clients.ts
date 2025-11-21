// Lista de clientes con sus fotos reales

import luchoGarcia from "@/assets/clients/lucho_garcia.webp";
import juanRodriguez from "@/assets/clients/juan_rodriguez.webp";
import raiNascimento from "@/assets/clients/rai_nascimiento.webp";
import darloLozano from "@/assets/clients/dario_lozano.webp";
import alejandroAlbajara from "@/assets/clients/alejandro_albajara.webp";
import victorTellado from "@/assets/clients/victor_tellado.webp";
import borjaTellado from "@/assets/clients/borja_tellado.webp";
import sergioMacias from "@/assets/clients/sergio_macias.webp";
import victorGuerra from "@/assets/clients/victor_guerra.webp";
import nicoClouston from "@/assets/clients/nico_clouston.webp";
import antonGarda from "@/assets/clients/anton_garda.webp";
import fabioGonzalez from "@/assets/clients/fabio_gonzalez.webp";
import rodriParafita from "@/assets/clients/rodri_parafita.webp";
import braisLema from "@/assets/clients/brais_lema.webp";

export const clients = [
  {
    id: 1,
    name: "Lucho García",
    currentClub: "FC Cartagena",
    previousClubs: [
      "Real Madrid",
      "Rayo Vallecano",
      "Sevilla FC",
      "RC Deportivo",
      "SD Ponferradina",
      "Rayo Majadahonda",
      "Algeciras CF",
    ],
    photo: luchoGarcia,
  },
  {
    id: 2,
    name: "Juan Rodríguez",
    currentClub: "Coruxo FC",
    previousClubs: ["RC Deportivo", "Real Madrid CF", "Deportivo Guadalajara", "SD Tarazona"],
    photo: juanRodriguez,
  },
  {
    id: 3,
    name: "Raí Nascimento",
    currentClub: "Guaraní",
    previousClubs: ["Real Zaragoza", "UD Ibiza", "RC Deportivo", "EC Bahía", "PFC Ludogorets"],
    photo: raiNascimento,
  },
  {
    id: 4,
    name: "Darío Lozano",
    currentClub: "CD Unión Malacitano",
    previousClubs: ["Real Betis", "Cultural Leonesa", "AD Ceuta"],
    photo: darloLozano,
  },
  {
    id: 5,
    name: "Alejandro Albajara",
    currentClub: "Recreativo de Huelva",
    previousClubs: ["Real Betis", "Xerez CD", "Club Atlético Central"],
    photo: alejandroAlbajara,
  },
  {
    id: 6,
    name: "Victor Tellado",
    currentClub: "Real Betis",
    previousClubs: ["FC Ordino", "UE Santa Coloma"],
    photo: victorTellado,
  },
  {
    id: 7,
    name: "Borja Tellado",
    currentClub: "Sevilla FC",
    previousClubs: ["AD Nervión"],
    photo: borjaTellado,
  },
  {
    id: 8,
    name: "Sergio Macías",
    currentClub: "FC Cartagena",
    previousClubs: ["Real Betis", "Levante UD"],
    photo: sergioMacias,
  },
  {
    id: 9,
    name: "Victor Guerra",
    currentClub: "",
    previousClubs: ["RC Deportivo", "Atl. Arteixo", "Betanzos CF", "UD Paiosaco"],
    photo: victorGuerra,
  },
  {
    id: 10,
    name: "Nico Clouston",
    currentClub: "",
    previousClubs: ["RC Deportivo", "Silva SD", "Atl. Arteixo"],
    photo: nicoClouston,
  },
  {
    id: 11,
    name: "Antón Garda",
    currentClub: "Francis Marion Athletics",
    previousClubs: ["Victoria CF", "Silva SD"],
    photo: antonGarda,
  },
  {
    id: 12,
    name: "Fabio Gonzalez",
    currentClub: "Atl. Arteixo",
    previousClubs: ["Silva SD", "RC Deportivo"],
    photo: fabioGonzalez,
  },
  {
    id: 13,
    name: "Rodri Parafita",
    currentClub: "Silva SD",
    previousClubs: [
      "RC Deportivo",
      "CD Ribadumia",
      "Fort Wayne",
      "Franklin Pierce University",
      "UD Paiosaco",
    ],
    photo: rodriParafita,
  },
  {
    id: 14,
    name: "Brais Lema",
    currentClub: "Silva SD",
    previousClubs: ["RC Deportivo"],
    photo: braisLema,
  },
];

export default clients;
