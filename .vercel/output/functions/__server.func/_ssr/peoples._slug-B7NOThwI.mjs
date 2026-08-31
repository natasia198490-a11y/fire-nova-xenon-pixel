import { v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { g as finds, u as getWorld } from "./router-BEhu7H3t.mjs";
import { a as Route$3 } from "./router-BEhu7H3t2.mjs";
import { t as ScholarBlock } from "./scholar-block-C8G7UDUR.mjs";
import { t as FindList } from "./find-list-CtGXW2yy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/peoples._slug-B7NOThwI.js
var import_jsx_runtime = require_jsx_runtime();
function PeoplePage() {
	const { people } = Route$3.useLoaderData();
	const world = getWorld(people.worldSlug);
	const related = finds.filter((f) => f.peopleSlugs?.includes(people.slug));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-[0.65rem] font-medium uppercase tracking-[0.18em] text-muted",
				children: ["Народ", world ? ` · ${world.name}` : ""]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-5xl font-medium text-fg",
				children: people.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 font-display text-xl leading-relaxed text-fg",
				children: people.traveler
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FindList, { finds: related }),
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScholarBlock, { children: people.scholar })
		]
	});
}
//#endregion
export { PeoplePage as component };
