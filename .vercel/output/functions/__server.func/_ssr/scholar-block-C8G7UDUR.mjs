import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as ChevronDown } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/scholar-block-C8G7UDUR.js
var import_jsx_runtime = require_jsx_runtime();
function ScholarBlock({ title = "Для учёных", children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
		className: "group mt-10 scroll-mt-28 rounded-lg border border-border bg-wood",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
			className: "flex min-h-12 cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-left [&::-webkit-details-marker]:hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-xl text-fg",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-5 shrink-0 text-muted transition-transform duration-200 group-open:rotate-180" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-4 border-t border-border px-5 py-5 font-display text-lg leading-relaxed text-muted",
			children: typeof children === "string" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children }) : children
		})]
	});
}
//#endregion
export { ScholarBlock as t };
