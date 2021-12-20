/* eslint-disable import/no-dynamic-require */
/* eslint-disable @typescript-eslint/no-require-imports */
import type { RouteOptions } from "fastify";
import type { RouteGenericInterface } from "fastify/types/route";
import type { IncomingMessage, Server, ServerResponse } from "http";

type ModuleType = {
  [s: string]: RouteOptions<
    Server,
    IncomingMessage,
    ServerResponse,
    RouteGenericInterface,
    unknown
  >;
};

export function loadModule(path: string): ModuleType {
  const module: {
    routes: ModuleType;
  } = require(path);

  return module.routes;
}
