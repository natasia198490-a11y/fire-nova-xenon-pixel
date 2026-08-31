"use client";

import { Search, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "@tanstack/react-router";
import { searchLore } from "@/lib/lore";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const kindRu = {
  find: "Находка",
  world: "Мир",
  place: "Место",
  voice: "Голос",
  people: "Народ",
} as const;

export function SearchDialog() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const hits = useMemo(() => searchLore(q), [q]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) {
      setQ("");
      const t = window.setTimeout(() => inputRef.current?.focus(), 30);
      return () => window.clearTimeout(t);
    }
  }, [open]);

  function go(href: string) {
    setOpen(false);
    router.history.push(href);
  }

  return (
    <>
      <Button
        variant="brass"
        size="sm"
        onClick={() => setOpen(true)}
        aria-label="Искать среди находок"
        className="min-w-11"
      >
        <Search className="size-4" />
        <span className="hidden sm:inline">Искать</span>
      </Button>
      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-bg/70 px-4 pt-20"
          onClick={() => setOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Каталог стола"
            className="paper-sheet w-full max-w-lg rounded-xl p-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 rounded-md bg-paper-2 px-3">
              <Search className="size-4 text-ink-soft" />
              <input
                ref={inputRef}
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Имя, место, соль, туман…"
                className="h-12 w-full bg-transparent font-display text-lg text-ink placeholder:text-ink-soft/70 focus:outline-none"
              />
              <button
                type="button"
                className="size-11 text-ink-soft"
                onClick={() => setOpen(false)}
                aria-label="Закрыть"
              >
                <X className="mx-auto size-4" />
              </button>
            </div>
            <ul className="mt-2 max-h-80 overflow-y-auto">
              {q && hits.length === 0 ? (
                <li className="px-3 py-6 text-center font-display text-ink-soft">
                  В ящике пусто по этому слову.
                </li>
              ) : null}
              {hits.map((hit) => (
                <li key={`${hit.kind}-${hit.slug}`}>
                  <button
                    type="button"
                    onClick={() => go(hit.href)}
                    className={cn(
                      "flex w-full flex-col items-start rounded-md px-3 py-3 text-left",
                      "hover:bg-paper-2",
                    )}
                  >
                    <span className="text-[0.65rem] font-medium uppercase tracking-[0.14em] text-ink-soft">
                      {kindRu[hit.kind]}
                    </span>
                    <span className="font-display text-lg text-ink">{hit.title}</span>
                    <span className="text-sm text-ink-soft">{hit.hint}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </>
  );
}
