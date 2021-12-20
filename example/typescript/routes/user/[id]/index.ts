import type { Resource } from "../../../../../src";

export const routes: Resource = {
  get: {
    handler: async (request, reply) => {
      const { params } = request;
      await reply.send(params);
    },
  },
};
