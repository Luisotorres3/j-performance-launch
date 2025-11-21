/**
 * Training plans data
 * Centralized configuration for all training plan types
 */

export interface Plan {
  title: string;
  originalPrice: number;
  price: number;
  savings: number;
  giftTrimestral?: string;
  giftSemestral?: string;
  popular?: boolean;
  features: string[];
}

export const TRAINING_PLANS: Plan[] = [
  {
    title: "Básico",
    originalPrice: 60,
    price: 50,
    savings: 10,
    giftTrimestral: "500g Proteína ",
    giftSemestral: "500gr Proteína + 100g Creatina",
    features: [
      "Entrenamiento profesional",
      "Control de cargas",
      "Planificación versátil y contrastada",
      "Revisiones y actualizaciones periódicas",
      "Método probado para empezar a mejorar desde cualquier nivel",
      "Revisión técnica",
    ],
  },
  {
    title: "Profesional",
    originalPrice: 90,
    price: 75,
    savings: 15,
    giftTrimestral: "500gr Proteína + 100g Creatina",
    giftSemestral: "1kg Proteína + 100g Creatina",
    popular: true,
    features: [
      "Incluye todas las características del plan Básico",
      "Nutrición controlada",
      "Control del rendimiento",
      "Gestión de hábitos",
      "Videollamada mensual para evaluar la evolución de la programación",
    ],
  },
  {
    title: "Élite",
    originalPrice: 130,
    price: 110,
    savings: 20,
    giftTrimestral: "1kg Proteína + 500g Creatina",
    giftSemestral: "2kg Proteína + 500g Creatina",
    features: [
      "Incluye todas las características del plan Profesional",
      "Técnicas de nutrición avanzada",
      "Gestión de la suplementación",
      "Planificación avanzada por macro y mesociclos",
      "Informes exhaustivos personalizados de rendimiento mensuales",
    ],
  },
  {
    title: "Opositores",
    originalPrice: 62,
    price: 50,
    savings: 12,
    giftTrimestral: "500gr Proteína + 100g Creatina",
    giftSemestral: "1kg Proteína + 100g Creatina",
    features: [
      "Entrenamiento + nutrición adaptado a tus pruebas físicas y a tu nivel de base",
      "Mediciones programadas de marcas",
      "Análisis de fortalezas y debilidades",
      "Control de la técnica",
      "Ayuda con la gestión del conjunto de la oposición",
    ],
  },
  {
    title: "Readaptación",
    originalPrice: 50,
    price: 35,
    savings: 6,
    giftSemestral: "1kg Proteína + 100g Creatina",
    features: [
      "Trabajo para que vuelvas a hacer deporte con normalidad",
      "Vuelve a competir sin riesgos",
      "Trabajo estructural",
      "Transición a tu máximo rendimiento",
      "Comunicación clara sobre el progreso.",
      "Especialista en lesiones de tren inferior",
    ],
  },
];

/**
 * Utility function to calculate period-based pricing
 */
export const getPeriodPrice = (
  basePrice: number,
  period: "mensual" | "trimestral" | "semestral"
): number => {
  if (period === "mensual") return basePrice;
  if (period === "trimestral") return Math.round(basePrice * 0.9); // -10%
  if (period === "semestral") return Math.round(basePrice * 0.83); // -17%
  return basePrice;
};

/**
 * Get total price for multi-month periods
 */
export const getTotalPrice = (
  basePrice: number,
  period: "mensual" | "trimestral" | "semestral"
): number | undefined => {
  if (period === "mensual") return undefined;
  const monthlyPrice = getPeriodPrice(basePrice, period);
  if (period === "trimestral") return monthlyPrice * 3;
  if (period === "semestral") return monthlyPrice * 6;
  return undefined;
};
