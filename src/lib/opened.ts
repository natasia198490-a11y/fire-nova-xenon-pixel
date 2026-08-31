const KEY = "desk-opened-finds";

export function readOpened(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((x) => typeof x === "string") : [];
  } catch {
    return [];
  }
}

export function markOpened(slug: string) {
  if (typeof window === "undefined") return;
  const next = Array.from(new Set([...readOpened(), slug]));
  window.localStorage.setItem(KEY, JSON.stringify(next));
}
