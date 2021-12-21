import { Route } from "../../../../src";

export const routes: Route = {
  get: {
    handler: async (_request, reply) => {
      await reply.send({ get: "get user" });
    },
  },
  post: {
    handler: async (_request, reply) => {
      await reply.send({
        post: "post user",
      });
    },
  },
};
