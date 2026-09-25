import portrait from "@/assets/juan-personal.webp";
import LoadingImage from "@/components/LoadingImage";

// El encuadre se resuelve en CSS sobre la fotografía original, sin alterar su identidad.
export default function TrainerPortrait({ priority = false }: { priority?: boolean }) {
  return (
    <div className="trainer-portrait-frame">
      <LoadingImage
        src={portrait}
        alt="Juan Pasquau con la camiseta y el logo de J Performance System"
        width="1254"
        height="1254"
        loading={priority ? "eager" : "lazy"}
        {...(priority ? { fetchpriority: "high" } : {})}
      />
    </div>
  );
}
