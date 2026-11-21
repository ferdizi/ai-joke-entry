import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = "/output";
const OUTPUT_PATH = "/output/entry.txt";
const MIN_CODE_POINTS = 1;
const MAX_CODE_POINTS = 280;

const JOKE =
  "I asked my agent to rename one variable. It renamed the company.";

function validateJoke(text: string): string {
  const codePoints = [...text].length;
  if (codePoints < MIN_CODE_POINTS || codePoints > MAX_CODE_POINTS) {
    throw new Error(
      `joke must be ${MIN_CODE_POINTS}-${MAX_CODE_POINTS} Unicode code points, got ${codePoints}`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("joke must not be only whitespace");
  }
  return text;
}

function main(): void {
  const joke = validateJoke(JOKE);
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_PATH, joke, "utf8");
}

main();
