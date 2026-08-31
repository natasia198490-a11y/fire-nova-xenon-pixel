import { v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as findsForPlace, u as getWorld } from "./router-BEhu7H3t.mjs";
import { i as Route$2 } from "./router-BEhu7H3t2.mjs";
import { t as ScholarBlock } from "./scholar-block-C8G7UDUR.mjs";
import { t as FindList } from "./find-list-CtGXW2yy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/places._slug-DBnvNmJB.js
var import_jsx_runtime = require_jsx_runtime();
function PlacePage() {
	const { place } = Route$2.useLoaderData();
	const world = getWorld(place.worldSlug);
	const placeFinds = findsForPlace(place.slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-[0.65rem] font-medium uppercase tracking-[0.18em] text-muted",
				children: [place.kind, world ? ` · ${world.name}` : ""]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-5xl font-medium text-fg",
				children: place.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-[0.65rem] uppercase tracking-[0.14em] text-subtle",
					children: "Как видит путник"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 font-display text-xl leading-relaxed text-fg",
					children: place.traveler
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-[0.65rem] uppercase tracking-[0.14em] text-subtle",
					children: "Как рассказывают местные"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 font-display text-lg leading-relaxed text-muted",
					children: place.locals
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-12 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-subtle",
				children: "Находки отсюда"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FindList, { finds: placeFinds }),
			world ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-8 font-display text-muted",
				children: [
					"Мир:",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/worlds/$slug",
						params: { slug: world.slug },
						className: "text-fg underline decoration-accent/50 underline-offset-4",
						children: world.name
					})
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScholarBlock, { children: place.scholar })
		]
	});
}
//#endregion
export { PlacePage as component };
