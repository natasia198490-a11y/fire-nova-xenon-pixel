import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ScholarBlock } from "@/components/codex/scholar-block";
import { finds, getPeople, getWorld } from "@/lib/lore";
import { FindList } from "@/components/codex/find-list";

export const Route = createFileRoute("/peoples/$slug")({
  component: PeoplePage,
  loader: ({ params }) => {
    const people = getPeople(params.slug);
    if (!people) throw notFound();
    return { people };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.people.name} · Стол находок` : "Стол находок" },
    ],
  }),
});

function PeoplePage() {
  const { people } = Route.useLoaderData();
  const world = getWorld(people.worldSlug);
  const related = finds.filter((f) => f.peopleSlugs?.includes(people.slug));

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <p className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-muted">
        Народ{world ? ` · ${world.name}` : ""}
      </p>
      <h2 className="mt-2 font-display text-5xl font-medium text-fg">{people.name}</h2>
      <p className="mt-6 font-display text-xl leading-relaxed text-fg">{people.traveler}</p>
      <FindList finds={related} />
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
      <ScholarBlock>{people.scholar}</ScholarBlock>
    </main>
  );
}
