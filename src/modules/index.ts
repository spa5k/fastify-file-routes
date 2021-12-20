import fastifyPlugin from "fastify-plugin";
import { fastifyFileRoutesPlugin } from "./fastifyFileRoutesPlugin";
import type { FastifyFileSystemRoutesOptions } from "./types";

export const fileRoutes = fastifyPlugin<FastifyFileSystemRoutesOptions>(
  fastifyFileRoutesPlugin,
  {
    fastify: ">=3.0.0",
    name: "fastify-file-routes",
  }
);
