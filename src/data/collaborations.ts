import { nutritionPartner } from "./nutrition";
import jfReference from "@/assets/jf-reference.webp";

// Añadir aquí las futuras marcas cuando exista una colaboración confirmada.
export const collaborations = [
  {
    id: "jf-nutricion",
    logo: jfReference,
    logoFromPoster: true,
    name: nutritionPartner.name,
    category: "Entrenamiento + nutrición",
    description:
      "Tu entrenamiento y tu alimentación, trabajando juntos. Plan alimenticio personalizado, seguimiento y coordinación entre profesionales en nuestros packs conjuntos.",
    instagram: nutritionPartner.instagram,
    handle: nutritionPartner.handle,
  },
];
