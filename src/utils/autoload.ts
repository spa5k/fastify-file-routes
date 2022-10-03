/* eslint-disable no-console */
import type { FastifyInstance, RouteOptions } from "fastify";
import pc from "picocolors";
import { loadModule, ModuleType } from ".";
import { validMethods } from "../modules/types";

export async function autoload(
  fastify: FastifyInstance,
  fullPath: string,
  url: string,
  prefix: string
): Promise<void> {
  const module: ModuleType = await loadModule(fullPath);

  try {
    for (const [method, route] of Object.entries<RouteOptions>(module)) {
      if (validMethods.has(method)) {
        route.url = prefix ? `/${prefix}${url}` : url;
        route.prefixTrailingSlash = "both";

        fastify.route(route);
        switch (route.method) {
          case "POST": {
            console.info(
              `${pc.yellow(method.toUpperCase())}      ${route.url}`
            );

            break;
          }
          case "HEAD": {
            console.info(
              `${pc.bgMagenta(method.toUpperCase())}      ${route.url}`
            );

            break;
          }
          case "OPTIONS": {
            console.info(`${pc.bgCyan(method.toUpperCase())}   ${route.url}`);

            break;
          }
          default: {
            console.info(
              `${pc.green(method.toUpperCase())}       ${route.url}`
            );
          }
        }
      }
    }
  } catch (err) {
    throw new Error(
      `Error loading module at ${fullPath}, check if this file is a correct route module or not`
    );
  }
}
