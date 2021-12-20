import type { FastifyInstance } from "fastify";
import fs from "fs";
import path from "path";
import { isAcceptableFile } from ".";
import { autoload } from "./autoload";
import { transformPathToUrl } from "./transformPathToUrl";

export async function scanFolders(
  fastify: FastifyInstance,
  baseDir: string,
  current: string
): Promise<void> {
  const combined: string = path.join(baseDir, current);
  const combinedStat: fs.Stats = fs.statSync(combined);

  if (combinedStat.isDirectory()) {
    if (!path.basename(current).startsWith("_")) {
      for (const entry of fs.readdirSync(combined)) {
        await scanFolders(fastify, baseDir, path.join(current, entry));
      }
    }
  } else if (isAcceptableFile(combined, combinedStat)) {
    await autoload(fastify, combined, transformPathToUrl(current));
  }
}
