import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";

export function ScholarBlock({
  title = "Для учёных",
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <details className="group mt-10 scroll-mt-28 rounded-lg border border-border bg-wood">
      <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-left [&::-webkit-details-marker]:hidden">
        <span className="font-display text-xl text-fg">{title}</span>
        <ChevronDown className="size-5 shrink-0 text-muted transition-transform duration-200 group-open:rotate-180" />
      </summary>
      <div className="space-y-4 border-t border-border px-5 py-5 font-display text-lg leading-relaxed text-muted">
        {typeof children === "string" ? <p>{children}</p> : children}
      </div>
    </details>
  );
}
