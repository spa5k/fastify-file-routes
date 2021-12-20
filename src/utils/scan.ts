import type { FastifyInstance } from "fastify";
import fs from "fs";
import path from "path";
import { autoload } from "./autoload";
import { transformPathToUrl } from "./transformPathToUrl";

export function scanFolders(
  fastify: FastifyInstance,
  baseDir: string,
  current: string,
  log = false
): void {
  const combined = path.join(baseDir, current);
  const combinedStat = fs.statSync(combined);

  if (combinedStat.isDirectory()) {
    if (!path.basename(current).startsWith("_")) {
      for (const entry of fs.readdirSync(combined)) {
        scanFolders(fastify, baseDir, path.join(current, entry), log);
      }
    }
  } else {
    autoload(fastify, combined, transformPathToUrl(current));
  }
}
