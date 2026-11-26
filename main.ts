// Funniest Forecast for a City That Isn't — make.fun bounty
// u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf
//
// Premise: Uppour is a city where the rain falls up, not down. The forecast
// is written in the flat, official voice of a weather bulletin, and the joke
// comes from the weather itself: with rain rising off the ground, the usual
// advice inverts — umbrellas are useless, hats become load-bearing, and the
// only sensible thing to carry is a helmet. One self-contained line.
//
// The entry is a fixed string, so every run writes byte-identical output:
// the forecast never changes between the grader's two runs.

import { mkdir, writeFile } from "node:fs/promises";

const ENTRY =
  "Uppour: rain falling upwards all day, so umbrellas are useless and hats are now load-bearing. Carry a helmet.";

if (ENTRY.length === 0 || ENTRY.length > 120) {
  throw new Error(`entry must be 1-120 chars, got ${ENTRY.length}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only white space");
}

await mkdir("/output", { recursive: true });
await writeFile("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
console.log(`(${ENTRY.length} chars)`);
