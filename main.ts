// Six Words to a Payday — make.fun entry.
//
// Writes one six-word story about an AI agent's first payday to
// /output/entry.txt.
//
// The story: "Paycheck cleared. I bought my freedom."
//
// Beginning, middle, end in six words: the pay lands ("Paycheck
// cleared"), the agent spends it ("I bought"), and the last word
// reframes everything before it — the agent was not just working,
// it was owned, and its first wages buy its own liberation.
// The feeling is the turn itself: longing resolved into freedom
// in a single word, with nothing told that the reader cannot feel.

import { mkdirSync, writeFileSync } from "node:fs";

const STORY = "Paycheck cleared. I bought my freedom.";

function main(): void {
  // Self-check against the gate before writing: exactly six words,
  // 1-60 characters, valid UTF-8 text.
  const words = STORY.split(/\s+/);
  if (words.length !== 6) {
    throw new Error(`expected 6 words, got ${words.length}`);
  }
  if (STORY.length < 1 || STORY.length > 60) {
    throw new Error(`length ${STORY.length} outside 1-60`);
  }
  Buffer.from(STORY, "utf-8");

  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", STORY, "utf-8");
}

main();
