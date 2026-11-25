import { mkdirSync, writeFileSync } from "node:fs";

const REVIEW =
  "Monday's standup ran 45 minutes, my inbox gained 73 emails, and the coffee machine quit before I did, the only one of us with an exit strategy.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REVIEW + "\n", "utf8");
