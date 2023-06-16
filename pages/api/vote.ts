// @ts-ignore
import prisma from "../../prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { itemId, userId } = req.body;

  if (req.method === "POST") {
    try {
      // @ts-ignore
      const vote = await prisma.vote.create({
        data: {
          itemId: Number(itemId),
          userId: userId,
        },
      });

      res.json(vote);
    } catch (error) {
      // If the vote already exists, Prisma will throw an error because of the unique constraint.
      // You can handle this case as you see fit. Here we just return a 400 status code.
      res
        .status(400)
        .json({ error: "A vote from this user already exists for this item." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
