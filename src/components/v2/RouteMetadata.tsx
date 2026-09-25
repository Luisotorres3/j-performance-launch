import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import metadata from "@/data/seo.json";

export default function RouteMetadata() {
  const { pathname } = useLocation();
  useEffect(() => {
    const path = pathname.replace(/\/$/, "") || "/";
    const page = metadata[path as keyof typeof metadata];
    const title = page?.title ?? "Página no encontrada | J Performance System";
    const description = page?.description ?? "La página solicitada no existe.";
    document.title = title;
    const url = `https://jperformancesystem.es${path === "/" ? "/" : `${path}/`}`;
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", url);
    for (const [selector, value] of [
      ['meta[name="description"]', description],
      ['meta[property="og:title"]', title],
      ['meta[property="og:description"]', description],
      ['meta[property="og:url"]', url],
      ['meta[name="twitter:title"]', title],
      ['meta[name="twitter:description"]', description],
      ['meta[name="robots"]', !page || path === "/checkout" ? "noindex,follow" : "index,follow"],
    ])
      document.querySelector(selector)?.setAttribute("content", value);
  }, [pathname]);
  return null;
}
