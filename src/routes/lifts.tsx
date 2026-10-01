import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/lifts")({
  component: LiftsLayout,
});

function LiftsLayout() {
  return <Outlet />;
}
