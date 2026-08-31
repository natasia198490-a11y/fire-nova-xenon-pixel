"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import { FindObject } from "@/components/desk/find-object";
import { finds, worlds, type FindKind } from "@/lib/lore";
import { readOpened } from "@/lib/opened";
import { cn } from "@/lib/utils";

const kinds: Array<{ id: "all" | FindKind; label: string }> = [
  { id: "all", label: "Всё на столе" },
  { id: "letter", label: "Письма" },
  { id: "notice", label: "Объявления" },
  { id: "checklist", label: "Чек-листы" },
  { id: "note", label: "Записки" },
  { id: "law", label: "Уставы" },
  { id: "form", label: "Бланки" },
];

export function DeskScene() {
  const [world, setWorld] = useState<string>("all");
  const [kind, setKind] = useState<"all" | FindKind>("all");
  const [opened, setOpened] = useState<string[]>([]);

  useEffect(() => {
    setOpened(readOpened());
  }, []);

  const visible = useMemo(() => {
    return finds.filter((f) => {
      if (world !== "all" && f.worldSlug !== world && !(world === "between" && f.worldSlug === null)) {
        return false;
      }
      if (kind !== "all" && f.kind !== kind) return false;
      return true;
    });
  }, [world, kind]);

  return (
    <main className="mx-auto max-w-6xl px-4 pb-16 pt-6">
      <p className="max-w-2xl font-display text-lg text-muted sm:text-xl">
        Миры оставляют здесь то, что не влезает в оглавление: указы, долги, рецепты,
        сплетни, штампы. Берите то, что ближе к лампе. Свод — в ящике, когда понадобится.
      </p>

      <div className="mt-6 flex flex-col gap-3">
        <FilterRow label="Откуда">
          <Chip active={world === "all"} onClick={() => setWorld("all")}>
            Все миры
          </Chip>
          <Chip active={world === "between"} onClick={() => setWorld("between")}>
            Междумирье
          </Chip>
          {worlds.map((w) => (
            <Chip key={w.slug} active={world === w.slug} onClick={() => setWorld(w.slug)}>
              {w.name}
            </Chip>
          ))}
        </FilterRow>
        <FilterRow label="Что за бумага">
          {kinds.map((k) => (
            <Chip key={k.id} active={kind === k.id} onClick={() => setKind(k.id)}>
              {k.label}
            </Chip>
          ))}
        </FilterRow>
      </div>

      <section
        aria-label="Стол"
        className="relative mt-8 overflow-hidden rounded-xl border border-border bg-wood shadow-desk lg:min-h-[52rem]"
      >
        <div
          className="pointer-events-none absolute inset-x-1/4 top-0 h-40 rounded-b-full opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, color-mix(in oklab, #f0d9a8 55%, transparent), transparent 70%)",
          }}
          aria-hidden
        />

        <div className="relative hidden min-h-[52rem] lg:block">
          {visible.map((find) => (
            <FindObject
              key={find.slug}
              find={find}
              opened={opened.includes(find.slug)}
            />
          ))}
        </div>

        <div className="flex flex-col gap-4 p-4 lg:hidden">
          {visible.map((find) => (
            <FindObject
              key={find.slug}
              find={find}
              opened={opened.includes(find.slug)}
              stacked
            />
          ))}
        </div>

        {visible.length === 0 ? (
          <p className="absolute inset-0 flex items-center justify-center font-display text-xl text-muted">
            На столе пусто по этому отбору. Смахните пыль с фильтра.
          </p>
        ) : null}
      </section>
    </main>
  );
}

function FilterRow({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
      <span className="shrink-0 text-[0.65rem] font-medium uppercase tracking-[0.16em] text-subtle">
        {label}
      </span>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "h-11 rounded-md px-3 text-sm transition-colors duration-150",
        active
          ? "bg-accent text-accent-fg"
          : "bg-wood-2 text-fg hover:bg-wood-3",
      )}
    >
      {children}
    </button>
  );
}
