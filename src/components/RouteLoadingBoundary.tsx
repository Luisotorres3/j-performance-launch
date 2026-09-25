import { Component, Suspense, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import PageLoader from "./PageLoader";

class PageErrorBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    if (this.state.failed) {
      return (
        <div className="page-loader" role="alert">
          <p>No se ha podido cargar la página.</p>
          <button className="v2-button button-gold" onClick={() => window.location.reload()}>
            Volver a intentar
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function RouteLoadingBoundary({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  return (
    <PageErrorBoundary key={pathname}>
      <Suspense fallback={<PageLoader />}>{children}</Suspense>
    </PageErrorBoundary>
  );
}
