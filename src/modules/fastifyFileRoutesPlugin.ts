/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FastifyInstance } from "fastify";
import fs from "fs";
import path from "path";
import pc from "picocolors";
import process from "process";
import { scanFolders } from "../utils";
import type { FileRoutesOptions } from "./types";
import { errorLabel } from "./types";

export const fastifyFileRoutesPlugin = async (
  fastify: FastifyInstance,
  options: FileRoutesOptions,
  next: any
): Promise<any> => {
  if (!options.routesDir) {
    const message: string = `${errorLabel} dir must be specified`;
    console.error(`${pc.red(message)}`);

    return next(new Error(message));
  }

  if (typeof options.routesDir !== "string") {
    const message: string = `${errorLabel} dir must be the path of file system routes directory`;
    console.error(`${pc.red(message)}`);

    return next(new Error(message));
  }

  let dirPath: string;

  if (path.isAbsolute(options.routesDir)) {
    dirPath = options.routesDir;
  } else if (path.isAbsolute(process.argv[1])) {
    dirPath = path.join(process.argv[1], "..", options.routesDir);
  } else {
    dirPath = path.join(
      process.cwd(),
      process.argv[1],
      "..",
      options.routesDir
    );
  }

  if (!fs.existsSync(dirPath)) {
    const message: string = `${errorLabel} dir ${dirPath} does not exists`;
    console.error(`${pc.red(message)}`);

    return next(new Error(message));
  }

  if (!fs.statSync(dirPath).isDirectory()) {
    const message: string = `${errorLabel} dir ${dirPath} must be a directory`;
    console.error(`${pc.red(message)}`);

    return next(new Error(message));
  }

  try {
    await scanFolders(
      fastify,
      dirPath,
      "",
      options.prefix ? options.prefix : ""
    );
  } catch (error: any) {
    console.error(`${pc.red(error.message)}`);
    return next(error);
  } finally {
    next();
  }
};
