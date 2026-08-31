import { HrefLink } from "@/components/href-link";

export type Star = {
  href: string;
  kicker: string;
  title: string;
};

export function Constellation({ items }: { items: Star[] }) {
  const unique = items.filter(
    (item, i, arr) => arr.findIndex((x) => x.href === item.href) === i,
  );
  if (unique.length === 0) return null;

  return (
    <section className="mt-12">
      <h3 className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-subtle">
        Рядом на столе
      </h3>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {unique.map((item) => (
          <li key={item.href}>
            <HrefLink
              href={item.href}
              className="block rounded-lg border border-border bg-wood px-4 py-4 transition-colors duration-150 hover:border-border-strong hover:bg-wood-2"
            >
              <span className="text-[0.65rem] uppercase tracking-[0.14em] text-muted">
                {item.kicker}
              </span>
              <span className="mt-1 block font-display text-xl text-fg">{item.title}</span>
            </HrefLink>
          </li>
        ))}
      </ul>
    </section>
  );
}
