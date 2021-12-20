import type { Resource } from "../../../../src";

export const routes: Resource = {
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
