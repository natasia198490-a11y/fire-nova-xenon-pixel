import { v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as peoples, b as worlds, v as places, y as voices } from "./router-BEhu7H3t.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/codex-CffC5z1W.js
var import_jsx_runtime = require_jsx_runtime();
function CodexPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[0.65rem] font-medium uppercase tracking-[0.18em] text-muted",
				children: "Ящик стола"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-5xl font-medium text-fg",
				children: "Свод"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 font-display text-xl leading-relaxed text-muted",
				children: "Здесь лежит то, что обычно ставят первым: география, народы, языки, устройство власти. На столе этого нет — на столе живут бумаги. Свод никуда не делся. Он для тех, кто уже потрогал письмо и хочет кости мира."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-12 text-[0.65rem] uppercase tracking-[0.18em] text-subtle",
				children: "Миры"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 grid gap-3",
				children: worlds.map((world) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/worlds/$slug",
					params: { slug: world.slug },
					className: "block rounded-lg border border-border bg-wood px-5 py-5 hover:bg-wood-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-3xl text-fg",
							children: world.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block font-display text-lg italic text-muted",
							children: world.epithet
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-2 block text-sm text-subtle",
							children: world.climate
						})
					]
				}) }, world.slug))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-12 text-[0.65rem] uppercase tracking-[0.18em] text-subtle",
				children: "Места"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 grid gap-3 sm:grid-cols-2",
				children: places.map((place) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/places/$slug",
					params: { slug: place.slug },
					className: "block rounded-lg border border-border bg-wood px-4 py-4 hover:bg-wood-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[0.65rem] uppercase tracking-[0.14em] text-muted",
						children: place.kind
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block font-display text-xl text-fg",
						children: place.name
					})]
				}) }, place.slug))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-12 text-[0.65rem] uppercase tracking-[0.18em] text-subtle",
				children: "Народы"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 grid gap-3 sm:grid-cols-2",
				children: peoples.map((people) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/peoples/$slug",
					params: { slug: people.slug },
					className: "block rounded-lg border border-border bg-wood px-4 py-4 hover:bg-wood-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block font-display text-xl text-fg",
						children: people.name
					})
				}) }, people.slug))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-12 text-[0.65rem] uppercase tracking-[0.18em] text-subtle",
				children: "Голоса"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 grid gap-3",
				children: voices.map((voice) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/voices/$slug",
					params: { slug: voice.slug },
					className: "block rounded-lg border border-border bg-wood px-4 py-4 hover:bg-wood-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-xl text-fg",
						children: voice.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block text-sm text-muted",
						children: voice.role
					})]
				}) }, voice.slug))
			})
		]
	});
}
//#endregion
export { CodexPage as component };
