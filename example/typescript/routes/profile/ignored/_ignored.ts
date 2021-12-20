import type { Route } from "../../../../../src";

export const routes: Route = {
  get: {
    handler: async (_request, reply) => {
      await reply.send("hello game param");
    },
  },
};
