import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { analyticsConfigured } from "@/constants/analytics";
export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    try {
      setVisible(
        !localStorage.getItem("cookieConsent") ||
          (analyticsConfigured && !localStorage.getItem("analyticsConsent"))
      );
    } catch {
      setVisible(true);
    }
    const open = () => setVisible(true);
    window.addEventListener("open-cookie-preferences", open);
    return () => window.removeEventListener("open-cookie-preferences", open);
  }, []);
  const choose = (value: "accepted" | "rejected") => {
    try {
      localStorage.setItem("cookieConsent", value);
      localStorage.setItem("analyticsConsent", value);
    } catch {
      /* The choice still applies for this visit when storage is unavailable. */
    }
    window.dispatchEvent(new CustomEvent("cookie-consent-changed", { detail: value }));
    setVisible(false);
  };
  if (!visible) return null;
  return (
    <aside className="cookie-notice" aria-labelledby="cookie-title">
      <h2 id="cookie-title">Tú decides sobre las cookies.</h2>
      <p>
        Guardamos tu preferencia en este navegador.{" "}
        {analyticsConfigured && "Con tu permiso, usamos Google Analytics para medir las visitas. "}
        El calendario de reservas de Calendly solo se carga cuando solicitas reservar y aceptas su
        uso. <Link to="/cookies">Consulta la política de cookies.</Link>
      </p>
      <div className="cookie-actions">
        <button onClick={() => choose("rejected")}>Rechazar</button>
        <button onClick={() => choose("accepted")}>Aceptar</button>
      </div>
    </aside>
  );
}
