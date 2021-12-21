import { FastifyPluginCallback } from "fastify";
import fastifyPlugin from "fastify-plugin";
import { Server } from "http";
import { fastifyFileRoutesPlugin } from "./fastifyFileRoutesPlugin";
import type { FileRoutesOptions } from "./types";

export const fileRoutes: FastifyPluginCallback<FileRoutesOptions, Server> =
  fastifyPlugin<FileRoutesOptions>(fastifyFileRoutesPlugin, {
    fastify: ">=3.0.0",
    name: "fastify-file-routes",
  });
