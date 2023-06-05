import fastify from "fastify";
import { env } from "../env";
import { transactionsRoutes } from "./routes/transactions";

const app = fastify();

app.register(transactionsRoutes, {
  prefix: "transactions",
});

const startServer = async () => {
  try {
    await app.listen({ port: env.PORT });
    console.log(`Server is running on port ${env.PORT}...`);
  } catch (error) {
    app.log.error(error);
  }
};

startServer();
