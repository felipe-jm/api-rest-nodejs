import fastify from "fastify";
import { knex } from "./database";
import { env } from "./env";
const app = fastify();

app.get("/hello", async (req, res) => {
  const tables = await knex("transactions").select("*");

  return tables;
});

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log(`Server is running on port ${env.PORT}`);
  });
