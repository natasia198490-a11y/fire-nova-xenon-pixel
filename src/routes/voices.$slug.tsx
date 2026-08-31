import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { FindList } from "@/components/codex/find-list";
import { findsForVoice, getVoice, getWorld } from "@/lib/lore";

export const Route = createFileRoute("/voices/$slug")({
  component: VoicePage,
  loader: ({ params }) => {
    const voice = getVoice(params.slug);
    if (!voice) throw notFound();
    return { voice };
  },
  head: ({ loaderData }) => ({
    meta: [{ title: loaderData ? `${loaderData.voice.name} · Стол находок` : "Стол находок" }],
  }),
});

function VoicePage() {
  const { voice } = Route.useLoaderData();
  const world = getWorld(voice.worldSlug);
  const voiceFinds = findsForVoice(voice.slug);

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <p className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-muted">
        Голос · {voice.role}
      </p>
      <h2 className="mt-2 font-display text-5xl font-medium text-fg">{voice.name}</h2>
      <p className="mt-6 font-display text-xl leading-relaxed text-fg">{voice.bio}</p>
      <p className="mt-4 font-display text-lg italic text-muted">{voice.tone}</p>
      {world ? (
        <p className="mt-6 font-display text-muted">
          Мир:{" "}
          <Link
            to="/worlds/$slug"
            params={{ slug: world.slug }}
            className="text-fg underline decoration-accent/50 underline-offset-4"
          >
            {world.name}
          </Link>
        </p>
      ) : (
        <p className="mt-6 font-display text-muted">Междумирье. Стол — его единственный адрес.</p>
      )}
      <h3 className="mt-12 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-subtle">
        Что оставил на столе
      </h3>
      <FindList finds={voiceFinds} />
    </main>
  );
}
