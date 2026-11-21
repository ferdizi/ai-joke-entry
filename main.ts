import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "I asked my agent to rename one variable. It renamed the company.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
