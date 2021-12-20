import type { RouteOptions } from "fastify";
import type { RouteGenericInterface } from "fastify/types/route";
import type { IncomingMessage, Server, ServerResponse } from "http";

export type ModuleType = {
  [s: string]: RouteOptions<
    Server,
    IncomingMessage,
    ServerResponse,
    RouteGenericInterface,
    unknown
  >;
};

export async function loadModule(path: string): Promise<ModuleType> {
  const module: {
    routes: ModuleType;
  } = await import(path);

  return module.routes;
}
