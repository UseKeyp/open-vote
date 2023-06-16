// @ts-ignore
import prisma from "../../prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { FormData } from "types/PollData";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const data: FormData = req.body;

    try {
      // @ts-ignore
      const createdPoll = await prisma.poll.create({
        data: {
          title: data.title,
          items: {
            create: data.items,
          },
          author: data.author,
        },
        include: {
          items: true, // This line is added to include the items in the response
        },
      });

      res.status(200).json(createdPoll);
    } catch (err) {
      if (err instanceof Error) {
        res
          .status(500)
          .json({ error: "Error creating poll", message: err.message });
      } else {
        // Handle any unexpected errors
        res.status(500).json({ error: "Unexpected error occurred" });
      }
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
