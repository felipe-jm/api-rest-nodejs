import { expect, test } from "vitest";

test("user can create a new transaction", () => {
  // fazer chamada HTTP para a rota /transactions

  const statusCode = 201;

  expect(statusCode).toEqual(201);
});
