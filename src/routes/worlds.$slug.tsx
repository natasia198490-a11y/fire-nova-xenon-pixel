import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { FindList } from "@/components/codex/find-list";
import { ScholarBlock } from "@/components/codex/scholar-block";
import { findsForWorld, getPeople, getPlace, getWorld } from "@/lib/lore";

export const Route = createFileRoute("/worlds/$slug")({
  component: WorldPage,
  loader: ({ params }) => {
    const world = getWorld(params.slug);
    if (!world) throw notFound();
    return { world };
  },
  head: ({ loaderData }) => ({
    meta: [{ title: loaderData ? `${loaderData.world.name} · Стол находок` : "Стол находок" }],
  }),
});

function WorldPage() {
  const { world } = Route.useLoaderData();
  const worldFinds = findsForWorld(world.slug);

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <p className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-muted">
        Мир · {world.climate}
      </p>
      <h2 className="mt-2 font-display text-5xl font-medium text-fg">{world.name}</h2>
      <p className="mt-2 font-display text-2xl italic text-muted">{world.epithet}</p>
      <p className="mt-6 font-display text-xl leading-relaxed text-fg">{world.atmosphere}</p>
      <p className="mt-4 font-display text-lg leading-relaxed text-muted">{world.summary}</p>

      <h3 className="mt-12 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-subtle">
        Что принесли с этого порога
      </h3>
      <FindList finds={worldFinds} />

      <div className="mt-10 grid gap-3 sm:grid-cols-2">
        {world.placeSlugs.map((slug) => {
          const place = getPlace(slug);
          if (!place) return null;
          return (
            <Link
              key={slug}
              to="/places/$slug"
              params={{ slug }}
              className="rounded-lg border border-border bg-wood px-4 py-4 hover:bg-wood-2"
            >
              <span className="text-[0.65rem] uppercase tracking-[0.14em] text-muted">
                {place.kind}
              </span>
              <span className="mt-1 block font-display text-xl text-fg">{place.name}</span>
            </Link>
          );
        })}
        {world.peopleSlugs.map((slug) => {
          const people = getPeople(slug);
          if (!people) return null;
          return (
            <Link
              key={slug}
              to="/peoples/$slug"
              params={{ slug }}
              className="rounded-lg border border-border bg-wood px-4 py-4 hover:bg-wood-2"
            >
              <span className="text-[0.65rem] uppercase tracking-[0.14em] text-muted">
                Народ
              </span>
              <span className="mt-1 block font-display text-xl text-fg">{people.name}</span>
            </Link>
          );
        })}
      </div>

      <ScholarBlock title="Полный свод мира">
        <p>
          <strong className="text-fg">География.</strong> {world.scholar.geography}
        </p>
        <p>
          <strong className="text-fg">Политика.</strong> {world.scholar.politics}
        </p>
        <p>
          <strong className="text-fg">Экономика.</strong> {world.scholar.economy}
        </p>
        <p>
          <strong className="text-fg">Культура.</strong> {world.scholar.culture}
        </p>
        <p>
          <strong className="text-fg">Народы.</strong> {world.scholar.peoples}
        </p>
        <p>
          <strong className="text-fg">Языки.</strong> {world.scholar.tongues}
        </p>
      </ScholarBlock>
    </main>
  );
}
