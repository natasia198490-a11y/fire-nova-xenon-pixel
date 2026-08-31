"use client";

import { Link } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import {
  getPlace,
  getVoice,
  getWorld,
  kindLabel,
  reliabilityLabel,
  relatedFinds,
  type Find,
} from "@/lib/lore";
import { markOpened } from "@/lib/opened";
import { cn } from "@/lib/utils";
import { Constellation } from "@/components/codex/constellation";
import { ScholarBlock } from "@/components/codex/scholar-block";

function stainClass(stain: Find["stain"]) {
  if (stain === "wine") return "stain-wine";
  if (stain === "salt") return "stain-salt";
  if (stain === "ink") return "stain-ink";
  if (stain === "grease") return "stain-grease";
  if (stain === "tea") return "stain-tea";
  return "";
}

export function FindDocument({ find }: { find: Find }) {
  const voice = getVoice(find.voiceSlug);
  const world = getWorld(find.worldSlug);
  const place = getPlace(find.placeSlug);
  const related = relatedFinds(find);
  const mapLike = find.kind === "map";
  const ruled = find.kind === "checklist" || find.kind === "form";

  useEffect(() => {
    markOpened(find.slug);
  }, [find.slug]);

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <p className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-muted">
        {kindLabel[find.kind]} · {find.era}
      </p>
      <h2 className="mt-2 font-display text-4xl font-medium text-fg sm:text-5xl">
        {find.objectTitle}
      </h2>
      <p className="mt-2 font-display text-xl italic text-muted">{find.title}</p>

      <dl className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
        {voice ? (
          <Meta label="Голос">
            <Link
              to="/voices/$slug"
              params={{ slug: voice.slug }}
              className="underline decoration-accent/50 underline-offset-4 hover:text-accent"
            >
              {voice.name}
            </Link>
            <span className="text-muted"> — {voice.role}</span>
          </Meta>
        ) : null}
        <Meta label="Надёжность">{reliabilityLabel[find.reliability]}</Meta>
        {world ? (
          <Meta label="Мир">
            <Link
              to="/worlds/$slug"
              params={{ slug: world.slug }}
              className="underline decoration-accent/50 underline-offset-4 hover:text-accent"
            >
              {world.name}
            </Link>
          </Meta>
        ) : (
          <Meta label="Мир">Междумирье</Meta>
        )}
        {place ? (
          <Meta label="Место">
            <Link
              to="/places/$slug"
              params={{ slug: place.slug }}
              className="underline decoration-accent/50 underline-offset-4 hover:text-accent"
            >
              {place.name}
            </Link>
          </Meta>
        ) : null}
      </dl>

      <article
        className={cn(
          "paper-sheet relative mt-8 rounded-lg px-6 py-8 sm:px-10 sm:py-12",
          mapLike && "map-hatch",
          ruled && "paper-ruled",
          stainClass(find.stain),
        )}
      >
        {find.kind === "letter" || find.kind === "law" ? (
          <span className="wax-seal absolute right-8 top-6" aria-hidden />
        ) : null}
        {find.kind === "map" ? <MapFigure /> : null}
        <div className="space-y-4 font-display text-lg leading-relaxed text-ink">
          {find.body.map((block, i) => {
            if (block.type === "h") {
              return (
                <h3
                  key={i}
                  className="text-sm font-medium uppercase tracking-[0.14em] text-ink-soft"
                >
                  {block.text}
                </h3>
              );
            }
            if (block.type === "p") {
              return <p key={i}>{block.text}</p>;
            }
            if (block.type === "li") {
              return (
                <p key={i} className="flex gap-3">
                  <span
                    className={cn(
                      "mt-1.5 size-3.5 shrink-0 rounded-xs border border-ink",
                      block.checked && "bg-ink",
                    )}
                    aria-hidden
                  />
                  <span>{block.text}</span>
                </p>
              );
            }
            if (block.type === "field") {
              return (
                <p key={i} className="border-b border-ink/15 pb-2">
                  <span className="block text-xs uppercase tracking-[0.12em] text-ink-soft">
                    {block.label}
                  </span>
                  {block.value}
                </p>
              );
            }
            if (block.type === "aside") {
              return (
                <p
                  key={i}
                  className="border-l-2 border-accent pl-4 text-base italic text-ink-soft"
                >
                  {block.text}
                </p>
              );
            }
            if (block.type === "stamp") {
              return (
                <p
                  key={i}
                  className="my-6 inline-block rotate-[-8deg] rounded-md border-2 border-seal px-4 py-2 font-ui text-xs font-semibold uppercase tracking-[0.2em] text-seal"
                >
                  {block.text}
                </p>
              );
            }
            if (block.type === "ps") {
              return (
                <p key={i} className="pt-4 italic">
                  P.S. {block.text}
                </p>
              );
            }
            return null;
          })}
        </div>
      </article>

      <ScholarBlock title="Как это видит свод">{find.scholar}</ScholarBlock>

      <Constellation
        items={[
          ...related.map((f) => ({
            href: `/finds/${f.slug}`,
            kicker: kindLabel[f.kind],
            title: f.objectTitle,
          })),
          ...(world
            ? [{ href: `/worlds/${world.slug}`, kicker: "Мир", title: world.name }]
            : []),
          ...(place
            ? [{ href: `/places/${place.slug}`, kicker: "Место", title: place.name }]
            : []),
          ...(voice
            ? [{ href: `/voices/${voice.slug}`, kicker: "Голос", title: voice.name }]
            : []),
        ]}
      />
    </main>
  );
}

function Meta({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <dt className="text-[0.65rem] uppercase tracking-[0.14em] text-subtle">{label}</dt>
      <dd className="font-display text-lg text-fg">{children}</dd>
    </div>
  );
}

function MapFigure() {
  return (
    <svg viewBox="0 0 320 140" className="mb-6 w-full text-ink/40" aria-hidden>
      <ellipse
        cx="160"
        cy="72"
        rx="120"
        ry="48"
        fill="none"
        stroke="currentColor"
        strokeDasharray="4 6"
      />
      <ellipse cx="160" cy="72" rx="80" ry="28" fill="none" stroke="currentColor" />
      <path
        d="M40 90 C 90 40, 180 120, 280 50"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <circle cx="210" cy="58" r="3" fill="currentColor" />
      <path d="M206 54 L210 46 L214 54" fill="currentColor" />
    </svg>
  );
}
