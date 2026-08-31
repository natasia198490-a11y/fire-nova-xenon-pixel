import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { b as worlds, d as kindLabel, g as finds, n as cn } from "./router-BEhu7H3t.mjs";
import { n as readOpened } from "./opened-GyNQFF1x.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BTukcnhi.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var sizeClass = {
	sm: "w-full lg:w-desk-sm",
	md: "w-full lg:w-desk-md",
	lg: "w-full lg:w-desk-lg"
};
function stainClass(stain) {
	if (stain === "wine") return "stain-wine";
	if (stain === "salt") return "stain-salt";
	if (stain === "ink") return "stain-ink";
	if (stain === "grease") return "stain-grease";
	if (stain === "tea") return "stain-tea";
	return "";
}
function FindObject({ find, opened, stacked }) {
	const mapLike = find.kind === "map";
	const ruled = find.kind === "checklist" || find.kind === "form";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/finds/$slug",
		params: { slug: find.slug },
		style: stacked ? void 0 : {
			left: `${find.desk.x}%`,
			top: `${find.desk.y}%`,
			transform: `rotate(${opened ? find.desk.rotate * .25 : find.desk.rotate}deg)`
		},
		className: cn("paper-sheet group block rounded-sm p-4 text-left", sizeClass[find.desk.size], stacked ? "relative" : "absolute", mapLike && "map-hatch", ruled && "paper-ruled", stainClass(find.stain), opened && "opacity-90", "transition-[transform,box-shadow,opacity] duration-200 ease-[var(--ease-out-soft)]", "hover:z-20 hover:shadow-paper-hover", "focus-visible:z-20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"),
		children: [
			find.kind === "letter" || find.kind === "law" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "wax-seal absolute -top-3 right-4",
				"aria-hidden": true
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-ui text-[0.65rem] font-medium uppercase tracking-[0.16em] text-ink-soft",
				children: [kindLabel[find.kind], opened ? " · уже смотрели" : ""]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 font-display text-xl font-medium leading-snug text-ink",
				children: find.objectTitle
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 line-clamp-2 font-display text-sm italic text-ink-soft",
				children: find.title
			})
		]
	});
}
var kinds = [
	{
		id: "all",
		label: "Всё на столе"
	},
	{
		id: "letter",
		label: "Письма"
	},
	{
		id: "notice",
		label: "Объявления"
	},
	{
		id: "checklist",
		label: "Чек-листы"
	},
	{
		id: "note",
		label: "Записки"
	},
	{
		id: "law",
		label: "Уставы"
	},
	{
		id: "form",
		label: "Бланки"
	}
];
function DeskScene() {
	const [world, setWorld] = (0, import_react.useState)("all");
	const [kind, setKind] = (0, import_react.useState)("all");
	const [opened, setOpened] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		setOpened(readOpened());
	}, []);
	const visible = (0, import_react.useMemo)(() => {
		return finds.filter((f) => {
			if (world !== "all" && f.worldSlug !== world && !(world === "between" && f.worldSlug === null)) return false;
			if (kind !== "all" && f.kind !== kind) return false;
			return true;
		});
	}, [world, kind]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 pb-16 pt-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-2xl font-display text-lg text-muted sm:text-xl",
				children: "Миры оставляют здесь то, что не влезает в оглавление: указы, долги, рецепты, сплетни, штампы. Берите то, что ближе к лампе. Свод — в ящике, когда понадобится."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-col gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FilterRow, {
					label: "Откуда",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
							active: world === "all",
							onClick: () => setWorld("all"),
							children: "Все миры"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
							active: world === "between",
							onClick: () => setWorld("between"),
							children: "Междумирье"
						}),
						worlds.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
							active: world === w.slug,
							onClick: () => setWorld(w.slug),
							children: w.name
						}, w.slug))
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterRow, {
					label: "Что за бумага",
					children: kinds.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
						active: kind === k.id,
						onClick: () => setKind(k.id),
						children: k.label
					}, k.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"aria-label": "Стол",
				className: "relative mt-8 overflow-hidden rounded-xl border border-border bg-wood shadow-desk lg:min-h-[52rem]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pointer-events-none absolute inset-x-1/4 top-0 h-40 rounded-b-full opacity-40",
						style: { background: "radial-gradient(ellipse at 50% 0%, color-mix(in oklab, #f0d9a8 55%, transparent), transparent 70%)" },
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative hidden min-h-[52rem] lg:block",
						children: visible.map((find) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FindObject, {
							find,
							opened: opened.includes(find.slug)
						}, find.slug))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-col gap-4 p-4 lg:hidden",
						children: visible.map((find) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FindObject, {
							find,
							opened: opened.includes(find.slug),
							stacked: true
						}, find.slug))
					}),
					visible.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "absolute inset-0 flex items-center justify-center font-display text-xl text-muted",
						children: "На столе пусто по этому отбору. Смахните пыль с фильтра."
					}) : null
				]
			})
		]
	});
}
function FilterRow({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-2 sm:flex-row sm:items-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "shrink-0 text-[0.65rem] font-medium uppercase tracking-[0.16em] text-subtle",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-wrap gap-2",
			children
		})]
	});
}
function Chip({ active, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: cn("h-11 rounded-md px-3 text-sm transition-colors duration-150", active ? "bg-accent text-accent-fg" : "bg-wood-2 text-fg hover:bg-wood-3"),
		children
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeskScene, {});
}
//#endregion
export { Home as component };
