import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/work")({
  component: WorkLayout,
});

function WorkLayout() {
  return (
    <div className="theme-paper min-h-screen bg-background text-foreground">
      <Outlet />
    </div>
  );
}
