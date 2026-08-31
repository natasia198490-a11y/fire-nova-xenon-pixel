import { v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as findsForWorld, c as getPlace, s as getPeople } from "./router-BEhu7H3t.mjs";
import { n as Route } from "./router-BEhu7H3t2.mjs";
import { t as ScholarBlock } from "./scholar-block-C8G7UDUR.mjs";
import { t as FindList } from "./find-list-CtGXW2yy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/worlds._slug-AFaZ1-cJ.js
var import_jsx_runtime = require_jsx_runtime();
function WorldPage() {
	const { world } = Route.useLoaderData();
	const worldFinds = findsForWorld(world.slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-[0.65rem] font-medium uppercase tracking-[0.18em] text-muted",
				children: ["Мир · ", world.climate]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-5xl font-medium text-fg",
				children: world.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 font-display text-2xl italic text-muted",
				children: world.epithet
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 font-display text-xl leading-relaxed text-fg",
				children: world.atmosphere
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 font-display text-lg leading-relaxed text-muted",
				children: world.summary
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-12 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-subtle",
				children: "Что принесли с этого порога"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FindList, { finds: worldFinds }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid gap-3 sm:grid-cols-2",
				children: [world.placeSlugs.map((slug) => {
					const place = getPlace(slug);
					if (!place) return null;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/places/$slug",
						params: { slug },
						className: "rounded-lg border border-border bg-wood px-4 py-4 hover:bg-wood-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[0.65rem] uppercase tracking-[0.14em] text-muted",
							children: place.kind
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block font-display text-xl text-fg",
							children: place.name
						})]
					}, slug);
				}), world.peopleSlugs.map((slug) => {
					const people = getPeople(slug);
					if (!people) return null;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/peoples/$slug",
						params: { slug },
						className: "rounded-lg border border-border bg-wood px-4 py-4 hover:bg-wood-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[0.65rem] uppercase tracking-[0.14em] text-muted",
							children: "Народ"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block font-display text-xl text-fg",
							children: people.name
						})]
					}, slug);
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScholarBlock, {
				title: "Полный свод мира",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "text-fg",
							children: "География."
						}),
						" ",
						world.scholar.geography
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "text-fg",
							children: "Политика."
						}),
						" ",
						world.scholar.politics
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "text-fg",
							children: "Экономика."
						}),
						" ",
						world.scholar.economy
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "text-fg",
							children: "Культура."
						}),
						" ",
						world.scholar.culture
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "text-fg",
							children: "Народы."
						}),
						" ",
						world.scholar.peoples
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "text-fg",
							children: "Языки."
						}),
						" ",
						world.scholar.tongues
					] })
				]
			})
		]
	});
}
//#endregion
export { WorldPage as component };
