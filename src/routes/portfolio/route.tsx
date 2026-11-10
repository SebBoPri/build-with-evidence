import { createFileRoute, Outlet } from "@tanstack/react-router";
import { SiteVariantContext } from "@/components/site/site-variant";

export const Route = createFileRoute("/portfolio")({
  component: PortfolioLayout,
});

function PortfolioLayout() {
  return (
    <SiteVariantContext.Provider value="portfolio">
      <div className="theme-paper">
        <Outlet />
      </div>
    </SiteVariantContext.Provider>
  );
}
