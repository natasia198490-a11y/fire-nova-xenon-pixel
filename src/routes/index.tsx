import { createFileRoute } from "@tanstack/react-router";
import { DeskScene } from "@/components/desk/desk-scene";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <DeskScene />;
}
