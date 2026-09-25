import whiteLogo from "@/assets/jps-white.webp";
import darkLogo from "@/assets/jps-dark.webp";

export default function BrandLogo({
  variant = "white",
  className = "",
  decorative = false,
}: {
  variant?: "white" | "dark";
  className?: string;
  decorative?: boolean;
}) {
  return (
    <span className={`jps-logo ${className}`}>
      <img
        src={variant === "white" ? whiteLogo : darkLogo}
        alt={decorative ? "" : "J Performance System"}
        width="1536"
        height="1024"
        decoding="async"
      />
    </span>
  );
}
