import { Route } from "../../../../src";

export const routes: Route = {
  get: {
    handler: async (request, reply) => {
      const { params } = request;
      await reply.send(params);
    },
    schema: {
      params: {
        id: {
          type: "string",
        },
      },
    },
  },
};
