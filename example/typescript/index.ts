import fastify from "fastify";
import { fileRoutes } from "../../src";

const main = async () => {
  const app = fastify({ logger: true });

  await app.register(fileRoutes, {
    dir: "./routes",
  });

  app.printRoutes();
  await app.listen(3000);
};
main().catch((error) => {
  console.log(error);
});
