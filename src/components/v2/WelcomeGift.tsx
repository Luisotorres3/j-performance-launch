import { Gift } from "lucide-react";
import { WELCOME_GIFTS, type PlanPeriod } from "@/constants/plans";

export default function WelcomeGift({ period }: { period: PlanPeriod }) {
  if (period === "mensual") {
    return (
      <aside
        className="welcome-gift welcome-gift-unavailable"
        aria-label="Pack de bienvenida"
        aria-live="polite"
      >
        <div className="welcome-gift-heading">
          <Gift size={22} aria-hidden="true" />
          <div>
            <strong>
              <s>Pack de bienvenida</s>
            </strong>
            <p>No incluido en el plan mensual</p>
          </div>
        </div>
      </aside>
    );
  }
  const gift = WELCOME_GIFTS[period];

  return (
    <aside className="welcome-gift" aria-label="Pack de bienvenida" aria-live="polite">
      <div className="welcome-gift-heading">
        <Gift size={22} aria-hidden="true" />
        <div>
          <strong>Tu pack de bienvenida</strong>
          <p>Incluido con tu plan</p>
        </div>
      </div>
      <div className="welcome-gift-options">
        <div className="welcome-gift-option">
          <p>
            <strong>{gift.protein}</strong> de proteína o{" "}
            <strong>{gift.creatine}</strong> de creatina
          </p>
        </div>
      </div>
      <small>Un regalo a elegir · En todos los planes y packs</small>
    </aside>
  );
}
