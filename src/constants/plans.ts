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
    price: 49,
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
    title: "Avanzado",
    originalPrice: 90,
    price: 69,
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
    title: "Opositores",
    originalPrice: 70,
    price: 59,
    savings: 10,
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
