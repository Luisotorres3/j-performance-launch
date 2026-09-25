import { useEffect, useRef, useState } from "react";
import { CONTACT_INFO } from "@/constants/contact";

type CalendlyApi = {
  initInlineWidget: (options: {
    url: string;
    parentElement: HTMLElement;
    prefill: { name: string; email: string };
  }) => void;
};
declare global {
  interface Window {
    Calendly?: CalendlyApi;
  }
}

export default function CalendlyBooking({ name, email }: { name: string; email: string }) {
  const element = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error" | "revoked">("loading");
  useEffect(() => {
    let active = true;
    const script = document.createElement("script");
    let timeout: ReturnType<typeof setTimeout>;
    const initialize = () => {
      if (!active || !element.current || !window.Calendly) return;
      clearTimeout(timeout);
      element.current.replaceChildren();
      window.Calendly.initInlineWidget({
        url: "https://calendly.com/jperformancesystem/30min?hide_event_type_details=1&primary_color=174bea",
        parentElement: element.current,
        prefill: { name, email },
      });
      const frame = element.current.querySelector("iframe");
      if (frame) frame.title = "Entrevista previa con Juan Pasquau";
      setStatus("ready");
    };
    const revoke = (event: Event) => {
      if ((event as CustomEvent<string>).detail === "rejected") {
        active = false;
        clearTimeout(timeout);
        element.current?.replaceChildren();
        script.remove();
        setStatus("revoked");
      }
    };
    window.addEventListener("cookie-consent-changed", revoke);
    if (window.Calendly) initialize();
    else {
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = initialize;
      script.onerror = () => {
        if (active) setStatus("error");
        clearTimeout(timeout);
      };
      timeout = setTimeout(() => {
        if (active) setStatus("error");
      }, 15000);
      document.body.appendChild(script);
    }
    return () => {
      active = false;
      clearTimeout(timeout);
      script.remove();
      window.removeEventListener("cookie-consent-changed", revoke);
    };
  }, [name, email]);
  return (
    <div>
      {status === "loading" && (
        <p role="status" className="py-8 text-sm text-muted-foreground">
          Cargando calendario…
        </p>
      )}
      {(status === "error" || status === "revoked") && (
        <div role="status" className="py-6 text-sm leading-relaxed">
          <p>
            {status === "revoked"
              ? "Has desactivado el calendario. Puedes volver a editar tus datos o contactar conmigo."
              : "No se ha podido cargar el calendario. Puedes reservar directamente o contactar conmigo."}
          </p>
          <a
            className="text-button"
            href="https://calendly.com/jperformancesystem/30min"
            target="_blank"
            rel="noreferrer"
          >
            Abrir Calendly ↗
          </a>
          <a
            className="text-button ml-5"
            href={CONTACT_INFO.whatsapp.url}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp ↗
          </a>
        </div>
      )}
      <div
        ref={element}
        className="calendly-inline-widget w-full"
        style={{ height: status === "ready" ? 700 : 0, overflow: "hidden" }}
      />
      {status === "ready" && (
        <p className="text-xs text-muted-foreground mt-3">
          Si el calendario no se muestra,{" "}
          <a
            className="underline"
            href="https://calendly.com/jperformancesystem/30min"
            target="_blank"
            rel="noreferrer"
          >
            abre tu entrevista en Calendly
          </a>
          .
        </p>
      )}
    </div>
  );
}
