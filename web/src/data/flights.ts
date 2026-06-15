import type { Bottle } from "../types";
import { bottleById } from "./bottles";

export interface Flight { id: string; title: string; subtitle: string; bottleIds: string[]; curated: boolean; }

export const curatedFlights: Flight[] = [
  { id: "bourbon-101", title: "Bourbon 101", subtitle: "A guided ladder from everyday to premium — the essential intro flight.", bottleIds: ["buffalo-trace", "woodford-reserve", "elijah-craig-small-batch", "four-roses-single-barrel"], curated: true },
  { id: "wheated-vs-rye", title: "Wheated vs. High Rye", subtitle: "Taste the mash bill difference — soft wheat against bold rye spice.", bottleIds: ["makers-mark", "weller-special-reserve", "wild-turkey-101", "bulleit-bourbon"], curated: true },
  { id: "single-barrel-showdown", title: "Single Barrel Showdown", subtitle: "Four hand-selected barrels — each unique, all excellent.", bottleIds: ["blantons-single-barrel", "four-roses-single-barrel", "knob-creek-9yr", "russells-reserve-10"], curated: true },
  { id: "buffalo-trace-family", title: "The Buffalo Trace Family", subtitle: "One distillery, many expressions — from everyday to legendary.", bottleIds: ["buffalo-trace", "eagle-rare-10", "weller-special-reserve", "blantons-single-barrel"], curated: true },
  { id: "barrel-proof-beasts", title: "Barrel Proof Beasts", subtitle: "Full-strength bourbon straight from the cask — add water to taste.", bottleIds: ["old-forester-1920", "wild-turkey-101", "knob-creek-9yr"], curated: true },
  { id: "under-40-all-stars", title: "Under $40 All-Stars", subtitle: "The best bourbons that won't break the bank.", bottleIds: ["buffalo-trace", "wild-turkey-101", "elijah-craig-small-batch", "1792-small-batch"], curated: true },
];

export const bottlesForFlight = (f: Flight): Bottle[] => f.bottleIds.map((id) => bottleById(id)).filter((b): b is Bottle => Boolean(b));

const CURRENT = "bourbon.customFlight";
export function saveCustomFlight(f: Flight) { localStorage.setItem(CURRENT, JSON.stringify(f)); }
export function loadCustomFlight(): Flight | null { try { const r = localStorage.getItem(CURRENT); return r ? JSON.parse(r) : null; } catch { return null; } }
const LIB = "bourbon.flightLibrary";
export function loadLibrary(): Flight[] { try { return JSON.parse(localStorage.getItem(LIB) || "[]"); } catch { return []; } }
export function saveToLibrary(f: Flight) { const lib = loadLibrary().filter((x) => x.id !== f.id); lib.unshift(f); localStorage.setItem(LIB, JSON.stringify(lib)); }
export const flightById = (id: string): Flight | undefined => curatedFlights.find((f) => f.id === id) || loadLibrary().find((f) => f.id === id) || (id === "custom" ? loadCustomFlight() ?? undefined : undefined);
