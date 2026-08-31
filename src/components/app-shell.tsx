"use client";

import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { Compass, Library } from "lucide-react";
import type { ReactNode } from "react";
import { SearchDialog } from "@/components/search-dialog";
import { Button } from "@/components/ui/button";
import { randomFindSlug } from "@/lib/lore";

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const navigate = useNavigate();

  function wander() {
    const current = pathname.startsWith("/finds/")
      ? pathname.slice("/finds/".length)
      : undefined;
    void navigate({ to: "/finds/$slug", params: { slug: randomFindSlug(current) } });
  }

  return (
    <div className="desk-grain min-h-dvh">
      <header className="sticky top-0 z-40 border-b border-border bg-bg/85 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
          <Link to="/" className="min-w-0 flex-1" aria-label="На стол находок">
            <p className="font-ui text-[0.65rem] font-medium uppercase tracking-[0.22em] text-muted">
              Кабинет между мирами
            </p>
            <h1 className="font-display text-2xl font-medium leading-tight text-fg sm:text-3xl">
              Стол находок
            </h1>
          </Link>
          <nav className="flex items-center gap-2" aria-label="Кабинет">
            <SearchDialog />
            <Button variant="brass" size="sm" onClick={wander} className="min-w-11">
              <Compass className="size-4" />
              <span className="hidden sm:inline">Заблудиться</span>
            </Button>
            <Button variant={pathname.startsWith("/codex") ? "default" : "brass"} size="sm" asChild>
              <Link to="/codex">
                <Library className="size-4" />
                <span className="hidden sm:inline">Свод</span>
              </Link>
            </Button>
          </nav>
        </div>
      </header>
      <div>{children}</div>
    </div>
  );
}
