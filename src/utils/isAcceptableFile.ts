import type fs from "fs";
import path from "path";

export function isAcceptableFile(file: string, stat: fs.Stats): boolean {
  return (
    !path.basename(file).startsWith(".") &&
    !path.basename(file).startsWith("_") &&
    !file.endsWith(".map") &&
    !file.endsWith(".test.js") &&
    !file.endsWith(".test.ts") &&
    stat.isFile()
  );
}
