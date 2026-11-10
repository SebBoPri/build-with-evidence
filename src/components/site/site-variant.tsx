import { createContext, useContext } from "react";

/** "studio" is the Slipstream Labs site, "portfolio" the standalone personal portfolio with no consultancy links. */
export type SiteVariant = "studio" | "portfolio";

export const SiteVariantContext = createContext<SiteVariant>("studio");

export const useSiteVariant = () => useContext(SiteVariantContext);

export type CaseSlug = "salmagen" | "data-quality-migration" | "spotify-feature-prioritisation" | "tedxfika";

const paths = {
  studio: {
    salmagen: "/work/salmagen",
    "data-quality-migration": "/work/data-quality-migration",
    "spotify-feature-prioritisation": "/work/spotify-feature-prioritisation",
    tedxfika: "/work/tedxfika",
  },
  portfolio: {
    salmagen: "/portfolio/salmagen",
    "data-quality-migration": "/portfolio/data-quality-migration",
    "spotify-feature-prioritisation": "/portfolio/spotify-feature-prioritisation",
    tedxfika: "/portfolio/tedxfika",
  },
} as const;

export function casePath(variant: SiteVariant, slug: CaseSlug) {
  return paths[variant][slug];
}

export function indexPath(variant: SiteVariant) {
  return variant === "portfolio" ? ("/portfolio" as const) : ("/work" as const);
}

export const PORTFOLIO_EMAIL = "hello@slipstreamlabs.se";
