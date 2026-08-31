import { v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as kindLabel } from "./router-BEhu7H3t.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/find-list-CtGXW2yy.js
var import_jsx_runtime = require_jsx_runtime();
function FindList({ finds }) {
	if (finds.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-4 grid gap-3",
		children: finds.map((find) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/finds/$slug",
			params: { slug: find.slug },
			className: "paper-sheet block rounded-sm px-4 py-4 text-ink transition-[transform,box-shadow] duration-150 hover:shadow-paper-hover",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[0.65rem] font-medium uppercase tracking-[0.14em] text-ink-soft",
					children: kindLabel[find.kind]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-1 block font-display text-xl font-medium",
					children: find.objectTitle
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-1 block font-display text-sm italic text-ink-soft",
					children: find.title
				})
			]
		}) }, find.slug))
	});
}
//#endregion
export { FindList as t };
