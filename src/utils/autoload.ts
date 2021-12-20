/* eslint-disable no-console */
import type { FastifyInstance, RouteOptions } from "fastify";
import pc from "picocolors";
import { loadModule, ModuleType } from ".";
import type { ValidMethods } from "../modules/types";
import { validMethods } from "../modules/types";

export async function autoload(
  fastify: FastifyInstance,
  fullPath: string,
  url: string
): Promise<void> {
  const module: ModuleType = await loadModule(fullPath);

  for (const [method, route] of Object.entries<RouteOptions>(module)) {
    if (validMethods.has(method)) {
      route.url = url;
      route.method = method.toUpperCase() as ValidMethods;
      route.prefixTrailingSlash = "both";

      fastify.route(route);
      switch (route.method) {
        case "POST": {
          console.info(`${pc.yellow(method.toUpperCase())}      ${url}`);

          break;
        }
        case "HEAD": {
          console.info(`${pc.bgMagenta(method.toUpperCase())}      ${url}`);

          break;
        }
        case "OPTIONS": {
          console.info(`${pc.bgCyan(method.toUpperCase())}   ${url}`);

          break;
        }
        default: {
          console.info(`${pc.green(method.toUpperCase())}       ${url}`);
        }
      }
    }
  }
}
