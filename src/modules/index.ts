import { FastifyPluginCallback } from "fastify";
import fastifyPlugin from "fastify-plugin";
import { Server } from "http";
import { fastifyFileRoutesPlugin } from "./fastifyFileRoutesPlugin";
import type { FileSystemRoutesOptions } from "./types";

export const fileRoutes: FastifyPluginCallback<
  FileSystemRoutesOptions,
  Server
> = fastifyPlugin<FileSystemRoutesOptions>(fastifyFileRoutesPlugin, {
  fastify: ">=3.0.0",
  name: "fastify-file-routes",
});
