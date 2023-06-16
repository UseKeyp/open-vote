// @ts-ignore
import prisma from "../../prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const pollId = req.query.id;

  if (!pollId) {
    return res.status(400).json({ message: "Poll id is required" });
  }

  try {
    // @ts-ignore
    const poll = await prisma.poll.findUnique({
      where: { id: Number(pollId) },
      include: {
        items: {
          include: {
            votes: true, // include votes related to each item
          },
        },
      },
    });

    if (!poll) {
      return res.status(404).json({ message: "Poll not found" });
    }

    res.status(200).json(poll);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
}
