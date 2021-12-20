/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FastifyInstance } from "fastify";
import fs from "fs";
import path from "path";
import pc from "picocolors";
import process from "process";
import { scanFolders } from "../utils";
import type { FastifyFileSystemRoutesOptions } from "./types";
import { errorLabel } from "./types";

export const fastifyFileRoutesPlugin = (
  fastify: FastifyInstance,
  options: FastifyFileSystemRoutesOptions,
  next: any
): any => {
  if (!options.dir) {
    const message = `${errorLabel} dir must be specified`;
    console.error(`${pc.red(message)}`);

    return next(new Error(message));
  }

  if (typeof options.dir !== "string") {
    const message = `${errorLabel} dir must be the path of file system routes directory`;
    console.error(`${pc.red(message)}`);

    return next(new Error(message));
  }

  let dirPath: string;

  if (path.isAbsolute(options.dir)) {
    dirPath = options.dir;
  } else if (path.isAbsolute(process.argv[1])) {
    dirPath = path.join(process.argv[1], "..", options.dir);
  } else {
    dirPath = path.join(process.cwd(), process.argv[1], "..", options.dir);
  }

  if (!fs.existsSync(dirPath)) {
    const message = `${errorLabel} dir ${dirPath} does not exists`;
    console.error(`${pc.red(message)}`);

    return next(new Error(message));
  }

  if (!fs.statSync(dirPath).isDirectory()) {
    const message = `${errorLabel} dir ${dirPath} must be a directory`;
    console.error(`${pc.red(message)}`);

    return next(new Error(message));
  }

  try {
    scanFolders(fastify, dirPath, "");
  } catch (error: any) {
    console.error(`${pc.red(error.message)}`);
    return next(error);
  } finally {
    next();
  }
};
