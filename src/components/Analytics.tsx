import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { measurementId as id, analyticsConfigured } from "@/constants/analytics";
type AnalyticsWindow = Window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };

export default function Analytics() {
  const location = useLocation();
  const pathname = location.pathname.replace(/\/$/, "") || "/";
  useEffect(() => {
    if (!analyticsConfigured) return;
    const win = window as AnalyticsWindow;
    const update = () => {
      let consent = false;
      try {
        consent = localStorage.getItem("analyticsConsent") === "accepted";
      } catch {
        /* No storage means no analytics. */
      }
      (win as unknown as Record<string, unknown>)[`ga-disable-${id}`] = !consent;
      if (!consent) {
        for (const cookie of document.cookie.split(";")) {
          const name = cookie.split("=")[0].trim();
          if (!/^_ga(?:_|$)/.test(name)) continue;
          const parts = window.location.hostname.split(".");
          for (let i = 0; i < parts.length - 1; i++)
            document.cookie = `${name}=; Max-Age=0; path=/; domain=.${parts.slice(i).join(".")}; SameSite=Lax`;
          document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
        }
        return;
      }
      if (!win.gtag) {
        win.dataLayer = [];
        win.gtag = function () {
          // Google's queue expects the Arguments object used by the gtag bootstrap.
          // eslint-disable-next-line prefer-rest-params
          win.dataLayer!.push(arguments);
        };
        win.gtag("js", new Date());
        win.gtag("config", id, {
          send_page_view: false,
          allow_google_signals: false,
          allow_ad_personalization_signals: false,
          page_location: `${window.location.origin}${pathname}`,
          page_referrer: document.referrer ? new URL(document.referrer).origin : "",
        });
        const script = document.createElement("script");
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
        document.head.appendChild(script);
      }
      // Never send form data or query strings to analytics.
      if (pathname !== "/checkout" && pathname !== "/contacto")
        win.gtag("event", "page_view", {
          page_location: `${window.location.origin}${pathname}`,
          page_title: document.title,
        });
    };
    update();
    window.addEventListener("cookie-consent-changed", update);
    window.addEventListener("storage", update);
    return () => {
      window.removeEventListener("cookie-consent-changed", update);
      window.removeEventListener("storage", update);
    };
  }, [pathname]);
  return null;
}
