import { useEffect, useRef, useState } from "react";

import { captchaSiteKey } from "@/constants/security";
type CaptchaApi = {
  render: (element: HTMLElement, options: Record<string, unknown>) => number;
  reset: (id: number) => void;
};
export default function ContactCaptcha({ onVerify }: { onVerify: (token: string) => void }) {
  const container = useRef<HTMLDivElement>(null);
  const [requested, setRequested] = useState(false);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    if (!requested || !captchaSiteKey) return;
    let active = true;
    let widget: number | undefined;
    const win = window as Window & { grecaptcha?: CaptchaApi; jpsCaptchaReady?: () => void };
    const initialize = () => {
      if (!active || !container.current || !win.grecaptcha) return;
      container.current.replaceChildren();
      widget = win.grecaptcha.render(container.current, {
        sitekey: captchaSiteKey,
        size: "compact",
        callback: onVerify,
        "expired-callback": () => onVerify(""),
        "error-callback": () => {
          onVerify("");
          setFailed(true);
        },
      });
    };
    win.jpsCaptchaReady = initialize;
    const script = document.createElement("script");
    const timeout = setTimeout(() => {
      if (active && widget === undefined) setFailed(true);
    }, 15000);
    if (win.grecaptcha?.render) initialize();
    else {
      script.src =
        "https://www.google.com/recaptcha/api.js?onload=jpsCaptchaReady&render=explicit&hl=es";
      script.async = true;
      script.onerror = () => {
        if (active) setFailed(true);
      };
      document.head.appendChild(script);
    }
    return () => {
      active = false;
      clearTimeout(timeout);
      if (widget !== undefined) win.grecaptcha?.reset(widget);
      script.remove();
      delete win.jpsCaptchaReady;
    };
  }, [requested, onVerify]);
  if (!captchaSiteKey) return null;
  return (
    <div className="contact-captcha">
      {!requested && (
        <button type="button" className="text-button" onClick={() => setRequested(true)}>
          Activar verificación antispam de Google
        </button>
      )}
      <div ref={container} />
      {failed && (
        <p role="alert">
          No se pudo cargar la verificación. Puedes contactar por WhatsApp o email.
        </p>
      )}
      <small>
        Google reCAPTCHA:{" "}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
          Privacidad
        </a>{" "}
        y{" "}
        <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">
          Condiciones
        </a>
        .
      </small>
    </div>
  );
}
