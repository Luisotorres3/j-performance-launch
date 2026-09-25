import { JOINT_PACKS } from "@/data/nutrition";
export type PlanPeriod = "mensual" | "trimestral" | "semestral";

export interface Plan {
  title: string;
  discipline: "running" | "strength" | "hybrid" | "opposition" | "nutrition";
  description: string;
  prices: Partial<Record<PlanPeriod, number>>;
  features: string[];
  detailsPending?: boolean;
  semestralSplit?: boolean;
  separatePrice?: number;
}

// Precios base mensuales; las duraciones largas aplican el descuento del periodo.
export const TRAINING_PLANS: Plan[] = [
  {
    title: "Running",
    discipline: "running",
    description: "Un plan de carrera centrado en tu objetivo.",
    prices: { mensual: 35 },
    features: [
      "Entrenamiento para corredores",
      "Planificación semanal",
      "Ajustes individualizados a edad, peso, género…",
    ],
  },
  {
    title: "Fuerza · Gimnasio",
    discipline: "strength",
    description: "Tu entrenamiento de fuerza, centrado en el gimnasio.",
    prices: { mensual: 49 },
    features: [
      "Planes de entrenamiento de fuerza",
      "Software personalizado para seguimiento del entrenamiento",
      "Ajustes de la carga de entrenamiento individualizados",
      "Planificación para todo tipo de objetivos y deportistas",
      "Seguimiento diario y trato directo cliente-entrenador",
    ],
  },
  {
    title: "Fuerza · Gimnasio + correr",
    discipline: "hybrid",
    description: "Combina el trabajo de fuerza en el gimnasio con tus sesiones de carrera.",
    prices: { mensual: 55 },
    features: ["Combina los planes de “Running” y “Fuerza Gimnasio”"],
  },
  {
    title: "Opositores",
    discipline: "opposition",
    description: "Preparación específica para las pruebas físicas de tu oposición.",
    prices: { mensual: 60 },
    features: [
      "Planificación adaptada a cada oposición: Bomberos, Guardia Civil, Policía Nacional o Local y Militares.",
      "Planificación y preparación de todas las disciplinas físicas.",
      "Seguimiento diario y trato directo opositor-entrenador",
    ],
  },
];

export const PERIOD_LABELS: Record<PlanPeriod, string> = {
  mensual: "1 mes",
  trimestral: "3 meses",
  semestral: "6 meses",
};

export const ALL_PLANS: Plan[] = [...TRAINING_PLANS, ...JOINT_PACKS];
export const PERIOD_OPTIONS = {
  mensual: { months: 1, discount: 0 },
  trimestral: { months: 3, discount: 10 },
  semestral: { months: 6, discount: 20 },
} as const;
export const getAvailablePeriods = (plan: Plan): PlanPeriod[] =>
  (["mensual", "trimestral", "semestral"] as const).filter(
    (period) => plan.prices[period] !== undefined || plan.prices.mensual !== undefined
  );
export const getPlanTotal = (plan: Plan, period: PlanPeriod): number => {
  const price = plan.prices[period];
  if (price === undefined && plan.prices.mensual !== undefined) {
    const { months, discount } = PERIOD_OPTIONS[period];
    const monthlyCents = Math.round(plan.prices.mensual * 100);
    return Math.round((monthlyCents * months * (100 - discount)) / 10000);
  }
  if (price === undefined) throw new Error(`Duración no disponible para ${plan.title}`);
  return price;
};
export const formatPrice = (price: number): string =>
  price.toLocaleString("es-ES", {
    minimumFractionDigits: Number.isInteger(price) ? 0 : 2,
    maximumFractionDigits: 2,
  });
export const resolvePlan = (title: unknown): Plan | undefined =>
  ALL_PLANS.find((plan) => plan.title === title);

export const WELCOME_GIFTS = {
  trimestral: { protein: "500 g", creatine: "500 g" },
  semestral: { protein: "2 kg", creatine: "1 kg" },
} as const;
