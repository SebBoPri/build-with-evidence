import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/work")({
  component: WorkLayout,
});

function WorkLayout() {
  return (
    <div className="theme-paper">
      <div className="paper-bar" aria-hidden="true">
        <span style={{ background: "var(--paper-violet)" }} />
        <span style={{ background: "var(--paper-sand)" }} />
        <span style={{ background: "var(--paper-ink)" }} />
        <span style={{ background: "var(--paper-blue)" }} />
      </div>
      <Outlet />
    </div>
  );
}
