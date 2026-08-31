import { finds, peoples, places, voices, worlds } from "./catalog";
import type { Find, FindKind, People, Place, Reliability, Voice, World } from "./types";

export type { Find, FindKind, People, Place, Reliability, Voice, World };
export { finds, peoples, places, voices, worlds };

export const kindLabel: Record<FindKind, string> = {
  letter: "Письмо",
  notice: "Объявление",
  checklist: "Чек-лист",
  recipe: "Рецепт",
  law: "Устав",
  map: "Карта",
  rumor: "Слух",
  form: "Бланк",
  note: "Записка",
  stamp: "Штамп",
};

export const reliabilityLabel: Record<Reliability, string> = {
  swears: "Клянётся",
  witness: "Видел сам",
  gossip: "Сплетня",
  official: "Казённое",
  child: "Не знает, но пишет",
  unknown: "Неизвестно",
};

export function getWorld(slug: string | null | undefined): World | undefined {
  if (!slug) return undefined;
  return worlds.find((w) => w.slug === slug);
}

export function getVoice(slug: string): Voice | undefined {
  return voices.find((v) => v.slug === slug);
}

export function getPlace(slug: string | undefined): Place | undefined {
  if (!slug) return undefined;
  return places.find((p) => p.slug === slug);
}

export function getPeople(slug: string): People | undefined {
  return peoples.find((p) => p.slug === slug);
}

export function getFind(slug: string): Find | undefined {
  return finds.find((f) => f.slug === slug);
}

export function findsForWorld(slug: string | null): Find[] {
  if (!slug) return finds.filter((f) => f.worldSlug === null);
  return finds.filter((f) => f.worldSlug === slug);
}

export function findsForVoice(slug: string): Find[] {
  return finds.filter((f) => f.voiceSlug === slug);
}

export function findsForPlace(slug: string): Find[] {
  return finds.filter((f) => f.placeSlug === slug);
}

export function relatedFinds(find: Find): Find[] {
  return find.relatedFindSlugs
    .map((s) => getFind(s))
    .filter((f): f is Find => Boolean(f));
}

export function randomFindSlug(except?: string): string {
  const pool = finds.filter((f) => f.slug !== except);
  const pick = pool[Math.floor(Math.random() * pool.length)];
  return (pick ?? finds[0]).slug;
}

export type SearchHit = {
  kind: "find" | "world" | "place" | "voice" | "people";
  slug: string;
  title: string;
  hint: string;
  href: string;
};

function hay(parts: Array<string | undefined | null>): string {
  return parts.filter(Boolean).join(" ").toLowerCase();
}

export function searchLore(query: string): SearchHit[] {
  const q = query.trim().toLowerCase();
  if (q.length < 1) return [];
  const hits: SearchHit[] = [];

  for (const f of finds) {
    const voice = getVoice(f.voiceSlug);
    const text = hay([
      f.title,
      f.objectTitle,
      kindLabel[f.kind],
      voice?.name,
      f.era,
      ...f.body.map((b) => ("text" in b ? b.text : `${b.label} ${b.value}`)),
    ]);
    if (text.includes(q)) {
      hits.push({
        kind: "find",
        slug: f.slug,
        title: f.objectTitle,
        hint: `${kindLabel[f.kind]} · ${voice?.name ?? ""}`,
        href: `/finds/${f.slug}`,
      });
    }
  }
  for (const w of worlds) {
    if (hay([w.name, w.epithet, w.summary, w.atmosphere]).includes(q)) {
      hits.push({
        kind: "world",
        slug: w.slug,
        title: w.name,
        hint: w.epithet,
        href: `/worlds/${w.slug}`,
      });
    }
  }
  for (const p of places) {
    if (hay([p.name, p.kind, p.traveler, p.locals]).includes(q)) {
      hits.push({
        kind: "place",
        slug: p.slug,
        title: p.name,
        hint: p.kind,
        href: `/places/${p.slug}`,
      });
    }
  }
  for (const v of voices) {
    if (hay([v.name, v.role, v.bio, v.tone]).includes(q)) {
      hits.push({
        kind: "voice",
        slug: v.slug,
        title: v.name,
        hint: v.role,
        href: `/voices/${v.slug}`,
      });
    }
  }
  for (const p of peoples) {
    if (hay([p.name, p.traveler, p.scholar]).includes(q)) {
      hits.push({
        kind: "people",
        slug: p.slug,
        title: p.name,
        hint: getWorld(p.worldSlug)?.name ?? "",
        href: `/peoples/${p.slug}`,
      });
    }
  }
  return hits.slice(0, 16);
}
