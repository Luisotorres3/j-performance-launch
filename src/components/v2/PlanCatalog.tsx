import { useId, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  Apple,
  ArrowUpRight,
  CalendarCheck,
  Check,
  Dumbbell,
  Footprints,
  Shield,
} from "lucide-react";
import {
  formatPrice,
  getPlanTotal,
  getAvailablePeriods,
  PERIOD_OPTIONS,
  PERIOD_LABELS,
  type Plan,
  type PlanPeriod,
} from "@/constants/plans";
import runningPhoto from "@/assets/plans/running-personal.webp";
import strengthPhoto from "@/assets/plans/strength-personal.webp";
import oppositionPhoto from "@/assets/plans/opposition-personal.webp";
import hybridPhoto from "@/assets/plans/hybrid-personal.webp";
import nutritionPhoto from "@/assets/plans/nutrition.jpg";
import LoadingImage from "@/components/LoadingImage";
import WelcomeGift from "./WelcomeGift";

const visuals = {
  running: { icon: Footprints, photo: runningPhoto },
  strength: { icon: Dumbbell, photo: strengthPhoto },
  hybrid: { icon: Dumbbell, photo: hybridPhoto },
  opposition: { icon: Shield, photo: oppositionPhoto },
  nutrition: { icon: Apple, photo: nutritionPhoto },
};

export default function PlanCatalog({
  plans,
  joint = false,
  optionsFooter,
}: {
  plans: Plan[];
  joint?: boolean;
  optionsFooter?: ReactNode;
}) {
  const [selected, setSelected] = useState(plans[0].title);
  const [period, setPeriod] = useState<PlanPeriod>("mensual");
  const headingId = useId();
  const plan = plans.find((item) => item.title === selected) ?? plans[0];
  const visual = visuals[plan.discipline];
  const Icon = visual.icon;
  const price = getPlanTotal(plan, period);
  const { months, discount } = PERIOD_OPTIONS[period];
  const originalPrice = (plan.separatePrice ?? getPlanTotal(plan, "mensual")) * months;
  const saving = Math.round((originalPrice - price) * 100) / 100;
  const roundedSaving = Math.round(saving);

  return (
    <div className="compact-plan-catalog">
      <div className="plan-controls">
        <div className="plan-picker">
          <label htmlFor={`${headingId}-plan`}>{joint ? "Tu pack" : "Tu entrenamiento"}</label>
          <select
            id={`${headingId}-plan`}
            value={plan.title}
            onChange={(event) => setSelected(event.target.value)}
          >
            {plans.map((item) => (
              <option key={item.title} value={item.title}>
                {item.title} · {formatPrice(getPlanTotal(item, period))} €
              </option>
            ))}
          </select>
        </div>
        <div className="plan-period-control">
          <span className="plan-control-label">Duración</span>
          <div className="plan-duration-selector" role="group" aria-label="Duración del plan">
            {getAvailablePeriods(plan).map((option) => (
              <button
                key={option}
                type="button"
                aria-pressed={period === option}
                onClick={() => setPeriod(option)}
              >
                <span>{option}</span>
                <small
                  className={PERIOD_OPTIONS[option].discount ? "plan-discount-badge" : undefined}
                >
                  {PERIOD_OPTIONS[option].discount
                    ? `-${PERIOD_OPTIONS[option].discount}%`
                    : PERIOD_LABELS[option]}
                </small>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="plan-comparison plan-catalog">
        <article className="plan-detail plan-photo-detail" aria-labelledby={headingId}>
          <div className="plan-photo-background" aria-hidden="true">
            <LoadingImage key={visual.photo} src={visual.photo} alt="" />
          </div>
          <div className="plan-summary">
            <div className="plan-detail-top">
              <p className="eyebrow">
                {joint
                  ? "JPS + JF NUTRICIÓN"
                  : plan.discipline === "nutrition"
                    ? "JF NUTRICIÓN"
                    : "J PERFORMANCE SYSTEM"}
              </p>
              <span className="plan-emblem">
                <Icon size={26} aria-hidden="true" />
              </span>
            </div>
            <h3 id={headingId}>{plan.title}</h3>
            <p>{plan.description}</p>
            <div className="plan-detail-price" aria-live="polite">
              <strong>{formatPrice(price)} €</strong>
              <span>/ {PERIOD_LABELS[period]}</span>
            </div>
            {saving > 0 && (
              <div className="plan-savings" aria-live="polite">
                <span className="plan-savings-amount">
                  Ahorras {saving !== roundedSaving ? "≈ " : ""}
                  {formatPrice(roundedSaving)} €
                </span>
                <del
                  aria-label={`${plan.separatePrice ? "Por separado" : "Sin descuento"}: ${formatPrice(originalPrice)} euros`}
                >
                  {formatPrice(originalPrice)} €
                </del>
                {discount > 0 && (
                  <small>{plan.separatePrice ? "Pack + duración" : "Por duración"}</small>
                )}
              </div>
            )}
          </div>
          <div className="plan-inclusions">
            <ul className="plan-features">
              {plan.features.map((feature) => (
                <li key={feature}>
                  <Check size={18} aria-hidden="true" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <WelcomeGift period={period} />
            <Link
              className="v2-button"
              to={`/checkout?plan=${encodeURIComponent(plan.title)}&periodo=${period}`}
            >
              Reservar entrevista <ArrowUpRight size={20} aria-hidden="true" />
            </Link>
            <span className="interview-note">
              <CalendarCheck size={17} aria-hidden="true" />
              Primero nos conocemos. Sin cobro al reservar.
            </span>
          </div>
        </article>
      </div>
      {optionsFooter}
    </div>
  );
}
