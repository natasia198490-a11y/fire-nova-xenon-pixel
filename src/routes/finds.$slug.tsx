import { createFileRoute, notFound } from "@tanstack/react-router";
import { FindDocument } from "@/components/find/find-document";
import { getFind } from "@/lib/lore";

export const Route = createFileRoute("/finds/$slug")({
  component: FindPage,
  loader: ({ params }) => {
    const find = getFind(params.slug);
    if (!find) throw notFound();
    return { find };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.find.objectTitle} · Стол находок`
          : "Стол находок",
      },
    ],
  }),
});

function FindPage() {
  const { find } = Route.useLoaderData();
  return <FindDocument find={find} />;
}
