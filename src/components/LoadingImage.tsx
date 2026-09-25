import { forwardRef, useEffect, useRef, useState, type ImgHTMLAttributes } from "react";

const emptyImage = `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="600" height="750" viewBox="0 0 600 750"><rect width="600" height="750" fill="#b8bfc2"/><text x="300" y="375" text-anchor="middle" fill="#263238" font-family="Arial,sans-serif" font-size="24">Imagen no disponible</text></svg>')}`;

const LoadingImage = forwardRef<HTMLImageElement, ImgHTMLAttributes<HTMLImageElement>>(
  ({ src, alt = "", className = "", onLoad, onError, ...props }, forwardedRef) => {
    const image = useRef<HTMLImageElement | null>(null);
    const [result, setResult] = useState<{ src?: string; status: "loaded" | "error" }>();
    const status = result?.src === src ? result.status : "loading";

    useEffect(() => {
      if (image.current?.complete) {
        setResult({ src, status: image.current.naturalWidth ? "loaded" : "error" });
      }
    }, [src]);

    return (
      <img
        {...props}
        ref={(node) => {
          image.current = node;
          if (typeof forwardedRef === "function") forwardedRef(node);
          else if (forwardedRef) forwardedRef.current = node;
        }}
        src={status === "error" ? emptyImage : src}
        alt={status === "error" && alt ? `${alt}. Imagen no disponible` : alt}
        title={status === "error" ? "Imagen no disponible" : props.title}
        aria-busy={status === "loading"}
        data-image-state={status}
        className={`loading-image ${className}`}
        onLoad={(event) => {
          if (status === "error") return;
          setResult({ src, status: "loaded" });
          onLoad?.(event);
        }}
        onError={(event) => {
          setResult({ src, status: "error" });
          onError?.(event);
        }}
      />
    );
  }
);
LoadingImage.displayName = "LoadingImage";
export default LoadingImage;
