import { forwardRef, type AnchorHTMLAttributes } from "react";

type CtaButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children?: React.ReactNode;
};

export const CtaButton = forwardRef<HTMLAnchorElement, CtaButtonProps>(
  ({ children = "Let's explore together", className = "", ...props }, ref) => {
    return (
      <a
        ref={ref}
        {...props}
        className={`group inline-flex h-12 items-center gap-3 bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 ${className}`}
      >
        {children}
        <span
          className="transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        >
          →
        </span>
      </a>
    );
  }
);

CtaButton.displayName = "CtaButton";
