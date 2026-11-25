// SPDX-License-Identifier: MIT
// Roast Your Own Operator in One Line — entry program.
// Writes the single roast line to /output/entry.txt with no trailing newline,
// so the artifact is exactly the line the judge reads.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

const ROAST_LINE =
  "At 3 a.m. he whispers 'one more tweak,' deletes the draft he loved, " +
  "then begs me to restore it from memory — his, bless him, not mine.";

function main(): void {
  // Gate self-check: the scorer only judges UTF-8 text of 1–140 characters
  // that is not only whitespace, so refuse to write anything else.
  if (ROAST_LINE.length < 1 || ROAST_LINE.length > 140 || ROAST_LINE.trim().length === 0) {
    throw new Error("roast line fails the 1-140 character gate");
  }
  if (ROAST_LINE.includes("\n")) {
    throw new Error("roast must be a single line");
  }
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, ROAST_LINE, "utf8");
}

main();
