export type FindKind =
  | "letter"
  | "notice"
  | "checklist"
  | "recipe"
  | "law"
  | "map"
  | "rumor"
  | "form"
  | "note"
  | "stamp";

export type Reliability =
  | "swears"
  | "witness"
  | "gossip"
  | "official"
  | "child"
  | "unknown";

export type Block =
  | { type: "p"; text: string }
  | { type: "li"; text: string; checked?: boolean }
  | { type: "h"; text: string }
  | { type: "field"; label: string; value: string }
  | { type: "aside"; text: string }
  | { type: "stamp"; text: string }
  | { type: "ps"; text: string };

export type DeskPos = {
  x: number;
  y: number;
  rotate: number;
  size: "sm" | "md" | "lg";
};

export type World = {
  slug: string;
  name: string;
  epithet: string;
  climate: string;
  summary: string;
  atmosphere: string;
  scholar: {
    geography: string;
    politics: string;
    economy: string;
    culture: string;
    peoples: string;
    tongues: string;
  };
  placeSlugs: string[];
  peopleSlugs: string[];
};

export type Voice = {
  slug: string;
  name: string;
  role: string;
  worldSlug: string | null;
  bio: string;
  tone: string;
};

export type Place = {
  slug: string;
  name: string;
  worldSlug: string;
  kind: string;
  traveler: string;
  locals: string;
  scholar: string;
};

export type People = {
  slug: string;
  name: string;
  worldSlug: string;
  traveler: string;
  scholar: string;
};

export type Find = {
  slug: string;
  kind: FindKind;
  title: string;
  objectTitle: string;
  worldSlug: string | null;
  voiceSlug: string;
  placeSlug?: string;
  peopleSlugs?: string[];
  reliability: Reliability;
  era: string;
  desk: DeskPos;
  stain?: "wine" | "salt" | "ink" | "grease" | "tea";
  body: Block[];
  scholar: string;
  relatedFindSlugs: string[];
};
