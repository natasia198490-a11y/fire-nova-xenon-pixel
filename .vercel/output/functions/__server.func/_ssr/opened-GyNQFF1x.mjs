//#region node_modules/.nitro/vite/services/ssr/assets/opened-GyNQFF1x.js
var KEY = "desk-opened-finds";
function readOpened() {
	if (typeof window === "undefined") return [];
	try {
		const raw = window.localStorage.getItem(KEY);
		if (!raw) return [];
		const parsed = JSON.parse(raw);
		return Array.isArray(parsed) ? parsed.filter((x) => typeof x === "string") : [];
	} catch {
		return [];
	}
}
function markOpened(slug) {
	if (typeof window === "undefined") return;
	const next = Array.from(/* @__PURE__ */ new Set([...readOpened(), slug]));
	window.localStorage.setItem(KEY, JSON.stringify(next));
}
//#endregion
export { readOpened as n, markOpened as t };
