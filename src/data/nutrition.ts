// Precios y duración mensual confirmados expresamente por Juan tras aportar el cartel.
export const nutritionPartner = {
  name: "JF Nutrición",
  instagram: "https://www.instagram.com/jfnutricion__/",
  handle: "@jfnutricion__",
};
export const JOINT_PACKS = [
  {
    title: "Pack Runner",
    discipline: "running" as const,
    separatePrice: 84.99,
    focus: "Running",
    training: "Plan de entrenamiento running",
    sourcePriceCents: 7499,
  },
  {
    title: "Pack Fuerza",
    discipline: "strength" as const,
    separatePrice: 98.99,
    focus: "Fuerza",
    training: "Plan de entrenamiento de fuerza",
    sourcePriceCents: 8999,
  },
  {
    title: "Pack Opositor",
    discipline: "opposition" as const,
    separatePrice: 109.99,
    focus: "Oposiciones",
    training: "Plan de entrenamiento opositor",
    sourcePriceCents: 9999,
  },
].map((pack) => ({
  ...pack,
  description: `${pack.training} y alimentación personalizada, con coordinación entre J Performance System y JF Nutrición.`,
  prices: { mensual: pack.sourcePriceCents / 100 },
  features: [
    pack.training,
    "Plan alimenticio personalizado",
    "Seguimiento y ajustes",
    "Coordinación entre profesionales",
  ],
}));
