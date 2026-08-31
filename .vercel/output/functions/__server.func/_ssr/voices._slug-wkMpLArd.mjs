import { v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as findsForVoice, u as getWorld } from "./router-BEhu7H3t.mjs";
import { r as Route$1 } from "./router-BEhu7H3t2.mjs";
import { t as FindList } from "./find-list-CtGXW2yy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/voices._slug-wkMpLArd.js
var import_jsx_runtime = require_jsx_runtime();
function VoicePage() {
	const { voice } = Route$1.useLoaderData();
	const world = getWorld(voice.worldSlug);
	const voiceFinds = findsForVoice(voice.slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-[0.65rem] font-medium uppercase tracking-[0.18em] text-muted",
				children: ["Голос · ", voice.role]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-5xl font-medium text-fg",
				children: voice.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 font-display text-xl leading-relaxed text-fg",
				children: voice.bio
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 font-display text-lg italic text-muted",
				children: voice.tone
			}),
			world ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-6 font-display text-muted",
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
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 font-display text-muted",
				children: "Междумирье. Стол — его единственный адрес."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-12 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-subtle",
				children: "Что оставил на столе"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FindList, { finds: voiceFinds })
		]
	});
}
//#endregion
export { VoicePage as component };
