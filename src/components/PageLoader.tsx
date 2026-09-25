import BrandLogo from "./BrandLogo";

export default function PageLoader() {
  return (
    <div className="page-loader" role="status" aria-live="polite">
      <BrandLogo decorative />
      <p>Cargando página</p>
      <span className="page-loader-track" aria-hidden="true">
        <span />
      </span>
    </div>
  );
}
