// @ts-ignore
import prisma from "../../prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { itemId, userId } = req.body;

  if (req.method === "DELETE") {
    try {
      // @ts-ignore
      await prisma.vote.delete({
        where: {
          itemId_userId: {
            itemId: Number(itemId),
            userId: userId,
          },
        },
      });

      res.json({ message: "Vote removed" });
    } catch (error) {
      // If the vote does not exist, Prisma will throw an error.
      // You can handle this case as you see fit. Here we just return a 400 status code.
      res
        .status(400)
        .json({ error: "No vote from this user exists for this item." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
