import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as getPlace, d as kindLabel, l as getVoice, m as reliabilityLabel, n as cn, p as relatedFinds, u as getWorld } from "./router-BEhu7H3t.mjs";
import { o as Route$4, t as HrefLink } from "./router-BEhu7H3t2.mjs";
import { t as markOpened } from "./opened-GyNQFF1x.mjs";
import { t as ScholarBlock } from "./scholar-block-C8G7UDUR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/finds._slug-DKYlPTzQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Constellation({ items }) {
	const unique = items.filter((item, i, arr) => arr.findIndex((x) => x.href === item.href) === i);
	if (unique.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "text-[0.65rem] font-medium uppercase tracking-[0.18em] text-subtle",
			children: "Рядом на столе"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-4 grid gap-3 sm:grid-cols-2",
			children: unique.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(HrefLink, {
				href: item.href,
				className: "block rounded-lg border border-border bg-wood px-4 py-4 transition-colors duration-150 hover:border-border-strong hover:bg-wood-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[0.65rem] uppercase tracking-[0.14em] text-muted",
					children: item.kicker
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-1 block font-display text-xl text-fg",
					children: item.title
				})]
			}) }, item.href))
		})]
	});
}
function stainClass(stain) {
	if (stain === "wine") return "stain-wine";
	if (stain === "salt") return "stain-salt";
	if (stain === "ink") return "stain-ink";
	if (stain === "grease") return "stain-grease";
	if (stain === "tea") return "stain-tea";
	return "";
}
function FindDocument({ find }) {
	const voice = getVoice(find.voiceSlug);
	const world = getWorld(find.worldSlug);
	const place = getPlace(find.placeSlug);
	const related = relatedFinds(find);
	const mapLike = find.kind === "map";
	const ruled = find.kind === "checklist" || find.kind === "form";
	(0, import_react.useEffect)(() => {
		markOpened(find.slug);
	}, [find.slug]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-[0.65rem] font-medium uppercase tracking-[0.18em] text-muted",
				children: [
					kindLabel[find.kind],
					" · ",
					find.era
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-4xl font-medium text-fg sm:text-5xl",
				children: find.objectTitle
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 font-display text-xl italic text-muted",
				children: find.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-6 grid gap-3 text-sm sm:grid-cols-2",
				children: [
					voice ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Meta, {
						label: "Голос",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/voices/$slug",
							params: { slug: voice.slug },
							className: "underline decoration-accent/50 underline-offset-4 hover:text-accent",
							children: voice.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-muted",
							children: [" — ", voice.role]
						})]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meta, {
						label: "Надёжность",
						children: reliabilityLabel[find.reliability]
					}),
					world ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meta, {
						label: "Мир",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/worlds/$slug",
							params: { slug: world.slug },
							className: "underline decoration-accent/50 underline-offset-4 hover:text-accent",
							children: world.name
						})
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meta, {
						label: "Мир",
						children: "Междумирье"
					}),
					place ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meta, {
						label: "Место",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/places/$slug",
							params: { slug: place.slug },
							className: "underline decoration-accent/50 underline-offset-4 hover:text-accent",
							children: place.name
						})
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: cn("paper-sheet relative mt-8 rounded-lg px-6 py-8 sm:px-10 sm:py-12", mapLike && "map-hatch", ruled && "paper-ruled", stainClass(find.stain)),
				children: [
					find.kind === "letter" || find.kind === "law" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "wax-seal absolute right-8 top-6",
						"aria-hidden": true
					}) : null,
					find.kind === "map" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapFigure, {}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-4 font-display text-lg leading-relaxed text-ink",
						children: find.body.map((block, i) => {
							if (block.type === "h") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-sm font-medium uppercase tracking-[0.14em] text-ink-soft",
								children: block.text
							}, i);
							if (block.type === "p") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: block.text }, i);
							if (block.type === "li") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("mt-1.5 size-3.5 shrink-0 rounded-xs border border-ink", block.checked && "bg-ink"),
									"aria-hidden": true
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: block.text })]
							}, i);
							if (block.type === "field") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "border-b border-ink/15 pb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-xs uppercase tracking-[0.12em] text-ink-soft",
									children: block.label
								}), block.value]
							}, i);
							if (block.type === "aside") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "border-l-2 border-accent pl-4 text-base italic text-ink-soft",
								children: block.text
							}, i);
							if (block.type === "stamp") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "my-6 inline-block rotate-[-8deg] rounded-md border-2 border-seal px-4 py-2 font-ui text-xs font-semibold uppercase tracking-[0.2em] text-seal",
								children: block.text
							}, i);
							if (block.type === "ps") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "pt-4 italic",
								children: ["P.S. ", block.text]
							}, i);
							return null;
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScholarBlock, {
				title: "Как это видит свод",
				children: find.scholar
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Constellation, { items: [
				...related.map((f) => ({
					href: `/finds/${f.slug}`,
					kicker: kindLabel[f.kind],
					title: f.objectTitle
				})),
				...world ? [{
					href: `/worlds/${world.slug}`,
					kicker: "Мир",
					title: world.name
				}] : [],
				...place ? [{
					href: `/places/${place.slug}`,
					kicker: "Место",
					title: place.name
				}] : [],
				...voice ? [{
					href: `/voices/${voice.slug}`,
					kicker: "Голос",
					title: voice.name
				}] : []
			] })
		]
	});
}
function Meta({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
		className: "text-[0.65rem] uppercase tracking-[0.14em] text-subtle",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
		className: "font-display text-lg text-fg",
		children
	})] });
}
function MapFigure() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 320 140",
		className: "mb-6 w-full text-ink/40",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "160",
				cy: "72",
				rx: "120",
				ry: "48",
				fill: "none",
				stroke: "currentColor",
				strokeDasharray: "4 6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "160",
				cy: "72",
				rx: "80",
				ry: "28",
				fill: "none",
				stroke: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M40 90 C 90 40, 180 120, 280 50",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "1.2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "210",
				cy: "58",
				r: "3",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M206 54 L210 46 L214 54",
				fill: "currentColor"
			})
		]
	});
}
function FindPage() {
	const { find } = Route$4.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FindDocument, { find });
}
//#endregion
export { FindPage as component };
