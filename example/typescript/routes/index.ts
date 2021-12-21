import type { Route } from "../../../src";

export const routes: Route = {
  get: {
    handler: async (_request, reply) => {
      await reply.send({
        get: "index",
      });
    },
  },
  head: {
    handler: async (_request, reply) => {
      await reply.send({
        get: "index",
      });
    },
  },
};
