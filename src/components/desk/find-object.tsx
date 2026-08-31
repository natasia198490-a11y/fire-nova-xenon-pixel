import { Link } from "@tanstack/react-router";
import { kindLabel, type Find } from "@/lib/lore";
import { cn } from "@/lib/utils";

const sizeClass = {
  sm: "w-full lg:w-desk-sm",
  md: "w-full lg:w-desk-md",
  lg: "w-full lg:w-desk-lg",
};

function stainClass(stain: Find["stain"]) {
  if (stain === "wine") return "stain-wine";
  if (stain === "salt") return "stain-salt";
  if (stain === "ink") return "stain-ink";
  if (stain === "grease") return "stain-grease";
  if (stain === "tea") return "stain-tea";
  return "";
}

export function FindObject({
  find,
  opened,
  stacked,
}: {
  find: Find;
  opened: boolean;
  stacked?: boolean;
}) {
  const mapLike = find.kind === "map";
  const ruled = find.kind === "checklist" || find.kind === "form";

  return (
    <Link
      to="/finds/$slug"
      params={{ slug: find.slug }}
      style={
        stacked
          ? undefined
          : {
              left: `${find.desk.x}%`,
              top: `${find.desk.y}%`,
              transform: `rotate(${opened ? find.desk.rotate * 0.25 : find.desk.rotate}deg)`,
            }
      }
      className={cn(
        "paper-sheet group block rounded-sm p-4 text-left",
        sizeClass[find.desk.size],
        stacked ? "relative" : "absolute",
        mapLike && "map-hatch",
        ruled && "paper-ruled",
        stainClass(find.stain),
        opened && "opacity-90",
        "transition-[transform,box-shadow,opacity] duration-200 ease-[var(--ease-out-soft)]",
        "hover:z-20 hover:shadow-paper-hover",
        "focus-visible:z-20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
      )}
    >
      {find.kind === "letter" || find.kind === "law" ? (
        <span className="wax-seal absolute -top-3 right-4" aria-hidden />
      ) : null}
      <p className="font-ui text-[0.65rem] font-medium uppercase tracking-[0.16em] text-ink-soft">
        {kindLabel[find.kind]}
        {opened ? " · уже смотрели" : ""}
      </p>
      <p className="mt-2 font-display text-xl font-medium leading-snug text-ink">
        {find.objectTitle}
      </p>
      <p className="mt-2 line-clamp-2 font-display text-sm italic text-ink-soft">
        {find.title}
      </p>
    </Link>
  );
}
