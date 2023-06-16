// @ts-ignore
import prisma from "../../prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id, item } = req.body;

  if (!id) {
    return res.status(400).json({ message: "Poll id is required" });
  }

  if (!item) {
    return res.status(400).json({ message: "No item data provided" });
  }

  try {
    // Create the new item without associating it with a poll
    // @ts-ignore
    const newItem = await prisma.item.create({
      data: {
        ...item,
        pollId: Number(id),
      },
    });
    console.log("new item in db", newItem);
    // Then update the poll to connect it with the newly created item
    // @ts-ignore
    const updatedPoll = await prisma.poll.update({
      where: { id: Number(id) },
      data: {
        items: {
          connect: {
            id: newItem.id,
          },
        },
      },
      include: {
        items: true, // Include the items in the response
      },
    });

    res.status(200).json(updatedPoll);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong", error });
  }
}
