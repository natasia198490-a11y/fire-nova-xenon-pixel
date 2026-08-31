import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { FindList } from "@/components/codex/find-list";
import { ScholarBlock } from "@/components/codex/scholar-block";
import { findsForPlace, getPlace, getWorld } from "@/lib/lore";

export const Route = createFileRoute("/places/$slug")({
  component: PlacePage,
  loader: ({ params }) => {
    const place = getPlace(params.slug);
    if (!place) throw notFound();
    return { place };
  },
  head: ({ loaderData }) => ({
    meta: [{ title: loaderData ? `${loaderData.place.name} · Стол находок` : "Стол находок" }],
  }),
});

function PlacePage() {
  const { place } = Route.useLoaderData();
  const world = getWorld(place.worldSlug);
  const placeFinds = findsForPlace(place.slug);

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <p className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-muted">
        {place.kind}
        {world ? ` · ${world.name}` : ""}
      </p>
      <h2 className="mt-2 font-display text-5xl font-medium text-fg">{place.name}</h2>

      <section className="mt-8">
        <h3 className="text-[0.65rem] uppercase tracking-[0.14em] text-subtle">
          Как видит путник
        </h3>
        <p className="mt-3 font-display text-xl leading-relaxed text-fg">{place.traveler}</p>
      </section>

      <section className="mt-8">
        <h3 className="text-[0.65rem] uppercase tracking-[0.14em] text-subtle">
          Как рассказывают местные
        </h3>
        <p className="mt-3 font-display text-lg leading-relaxed text-muted">{place.locals}</p>
      </section>

      <h3 className="mt-12 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-subtle">
        Находки отсюда
      </h3>
      <FindList finds={placeFinds} />

      {world ? (
        <p className="mt-8 font-display text-muted">
          Мир:{" "}
          <Link
            to="/worlds/$slug"
            params={{ slug: world.slug }}
            className="text-fg underline decoration-accent/50 underline-offset-4"
          >
            {world.name}
          </Link>
        </p>
      ) : null}

      <ScholarBlock>{place.scholar}</ScholarBlock>
    </main>
  );
}
