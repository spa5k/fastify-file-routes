import fastify, { FastifyInstance } from "fastify";
import { fileRoutes } from "../../src";

const main = async (): Promise<void> => {
  const app: FastifyInstance = fastify({ logger: true });

  await app.register(fileRoutes, {
    routesDir: "./routes",
  });

  app.printRoutes();
  await app.listen(3000);
};
main().catch((error) => {
  // eslint-disable-next-line no-console
  console.log(error);
});
