import { Link } from "@tanstack/react-router";
import { kindLabel, type Find } from "@/lib/lore";

export function FindList({ finds }: { finds: Find[] }) {
  if (finds.length === 0) return null;
  return (
    <ul className="mt-4 grid gap-3">
      {finds.map((find) => (
        <li key={find.slug}>
          <Link
            to="/finds/$slug"
            params={{ slug: find.slug }}
            className="paper-sheet block rounded-sm px-4 py-4 text-ink transition-[transform,box-shadow] duration-150 hover:shadow-paper-hover"
          >
            <span className="text-[0.65rem] font-medium uppercase tracking-[0.14em] text-ink-soft">
              {kindLabel[find.kind]}
            </span>
            <span className="mt-1 block font-display text-xl font-medium">
              {find.objectTitle}
            </span>
            <span className="mt-1 block font-display text-sm italic text-ink-soft">
              {find.title}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
