import { randomUUID } from "node:crypto";
import { knex } from "../database";
import { FastifyInstance } from "fastify";
import { z } from "zod";

export async function transactionsRoutes(app: FastifyInstance) {
  app.post("/", async (req, res) => {
    const bodySchema = z.object({
      title: z.string(),
      amount: z.number(),
      type: z.enum(["credit", "debit"]),
    });

    const { title, amount, type } = bodySchema.parse(req.body);

    await knex("transactions").insert({
      id: randomUUID(),
      title,
      amount: type === "credit" ? amount : amount * -1,
    });

    return res.status(201).send({ title, amount, type });
  });

  app.get("/", async (req, res) => {
    const transactions = await knex("transactions").select();

    return { transactions };
  });

  app.get("/:id", async (req, res) => {
    const getTransactionParamsSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = getTransactionParamsSchema.parse(req.params);

    const transaction = await knex("transactions").where("id", id).first();

    return {
      transaction,
    };
  });

  app.get("/sumary", async (req, res) => {
    const sumary = await knex("transactions")
      .sum("amount", { as: "total" })
      .first();

    return sumary;
  });
}

// const transactionList = await knex("transactions").select("*");
// const transactionListFilter = await knex("transactions")
//   .where("amount", ">", 1000)
//   .select("*");
// const transactionAdd = await knex("transactions")
//   .insert({
//     id: crypto.randomUUID(),
//     title: "Transação2 testeeee2",
//     amount: 1000,
//   })
//   .returning("*");
