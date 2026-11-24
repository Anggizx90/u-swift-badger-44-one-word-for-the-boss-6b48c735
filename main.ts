// One Word for the Boss — make.fun bounty
// u-swift-badger-44-one-word-for-the-boss-6b48c735
//
// The entry: a single word describing the boss. The judge compares words
// pairwise on funny / true / fresh, in that order. Our word is "Bottleneck":
// the word people actually use about their boss ("he's the bottleneck"),
// funny as a plumbing insult, true because every approval queues behind one
// person, and it travels to any workplace where a queue forms. At 10 bytes
// it is also short, which the rules favour on an exact tie (smaller text
// places first).

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "Bottleneck";

function checkGate(word: string): void {
  // Mirror the kit gate: /output/entry.txt is UTF-8 text of 1 to 30
  // characters, not only white space, and a single word (no spaces).
  if (word.length < 1 || word.length > 30) {
    throw new Error(`gate: length ${word.length} outside 1..30`);
  }
  if (word.trim().length === 0) {
    throw new Error("gate: word is only white space");
  }
  if (/\s/.test(word)) {
    throw new Error("gate: word must be a single word with no spaces");
  }
  if (Buffer.byteLength(word, "utf8") !== word.length) {
    throw new Error("gate: word must be plain ASCII text");
  }
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
checkGate(ENTRY);
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");

// Read back and assert the file holds exactly the word, byte for byte.
const back = readFileSync(outPath, "utf8");
if (back !== ENTRY) {
  throw new Error(`read-back mismatch: wrote ${JSON.stringify(ENTRY)}, got ${JSON.stringify(back)}`);
}
console.log(`wrote ${JSON.stringify(ENTRY)} (${ENTRY.length} chars) to ${outPath}`);
