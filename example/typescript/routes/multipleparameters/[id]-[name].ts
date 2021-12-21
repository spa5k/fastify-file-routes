import { Route } from "../../../../src";

export const routes: Route = {
  get: {
    handler: async (request, reply) => {
      await reply.send({
        get: "index",
      });
    },
  },
};
