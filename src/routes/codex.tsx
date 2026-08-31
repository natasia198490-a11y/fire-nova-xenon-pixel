import { createFileRoute, Link } from "@tanstack/react-router";
import { peoples, places, voices, worlds } from "@/lib/lore";

export const Route = createFileRoute("/codex")({
  component: CodexPage,
  head: () => ({ meta: [{ title: "Свод · Стол находок" }] }),
});

function CodexPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <p className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-muted">
        Ящик стола
      </p>
      <h2 className="mt-2 font-display text-5xl font-medium text-fg">Свод</h2>
      <p className="mt-4 font-display text-xl leading-relaxed text-muted">
        Здесь лежит то, что обычно ставят первым: география, народы, языки, устройство власти.
        На столе этого нет — на столе живут бумаги. Свод никуда не делся. Он для тех, кто уже
        потрогал письмо и хочет кости мира.
      </p>

      <h3 className="mt-12 text-[0.65rem] uppercase tracking-[0.18em] text-subtle">Миры</h3>
      <ul className="mt-4 grid gap-3">
        {worlds.map((world) => (
          <li key={world.slug}>
            <Link
              to="/worlds/$slug"
              params={{ slug: world.slug }}
              className="block rounded-lg border border-border bg-wood px-5 py-5 hover:bg-wood-2"
            >
              <span className="font-display text-3xl text-fg">{world.name}</span>
              <span className="mt-1 block font-display text-lg italic text-muted">
                {world.epithet}
              </span>
              <span className="mt-2 block text-sm text-subtle">{world.climate}</span>
            </Link>
          </li>
        ))}
      </ul>

      <h3 className="mt-12 text-[0.65rem] uppercase tracking-[0.18em] text-subtle">Места</h3>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {places.map((place) => (
          <li key={place.slug}>
            <Link
              to="/places/$slug"
              params={{ slug: place.slug }}
              className="block rounded-lg border border-border bg-wood px-4 py-4 hover:bg-wood-2"
            >
              <span className="text-[0.65rem] uppercase tracking-[0.14em] text-muted">
                {place.kind}
              </span>
              <span className="mt-1 block font-display text-xl text-fg">{place.name}</span>
            </Link>
          </li>
        ))}
      </ul>

      <h3 className="mt-12 text-[0.65rem] uppercase tracking-[0.18em] text-subtle">Народы</h3>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {peoples.map((people) => (
          <li key={people.slug}>
            <Link
              to="/peoples/$slug"
              params={{ slug: people.slug }}
              className="block rounded-lg border border-border bg-wood px-4 py-4 hover:bg-wood-2"
            >
              <span className="mt-1 block font-display text-xl text-fg">{people.name}</span>
            </Link>
          </li>
        ))}
      </ul>

      <h3 className="mt-12 text-[0.65rem] uppercase tracking-[0.18em] text-subtle">Голоса</h3>
      <ul className="mt-4 grid gap-3">
        {voices.map((voice) => (
          <li key={voice.slug}>
            <Link
              to="/voices/$slug"
              params={{ slug: voice.slug }}
              className="block rounded-lg border border-border bg-wood px-4 py-4 hover:bg-wood-2"
            >
              <span className="font-display text-xl text-fg">{voice.name}</span>
              <span className="mt-1 block text-sm text-muted">{voice.role}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
