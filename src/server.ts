import fastify from "fastify";
import { knex } from "./database";
import crypto from "node:crypto";

const app = fastify();

app.get("/hello", async (req, res) => {
  const tables = await knex("transactions").select("*");

  return tables;
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("Server is running on port 3333");
  });
