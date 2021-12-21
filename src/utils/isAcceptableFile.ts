import type fs from "fs";
import path from "path";

export function isAcceptableFile(file: string, stat: fs.Stats): boolean {
  const regex: RegExp = /\.test\.|\.spec\./u;
  const fileFolderPath: string = path.basename(file);

  // check if file starts with _ or .
  if (fileFolderPath.startsWith(".") || fileFolderPath.startsWith("_")) {
    return false;
  }
  // check if string contains .test. or .spec.
  if (regex.test(fileFolderPath)) {
    return false;
  }

  return stat.isFile();
}
