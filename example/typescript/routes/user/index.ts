import type { Route } from "../../../../src";

export const routes: Route = {
  get: {
    handler: async (_request, reply) => {
      await reply.send("hello user index");
    },
  },
  post: {
    handler: async (_request, reply) => {
      await reply.send({
        abcd: "spark",
      });
    },
  },
};
