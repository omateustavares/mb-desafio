import type { NextApiRequest, NextApiResponse } from "next";
import { setCookie } from "nookies";
import { prisma } from "../../../lib/prisma";
import dayjs from "dayjs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const id = String(req.query.id);

    const user = await prisma.events.findUnique({
      where: {
        id,
      },
    });

    return res.status(201).json(user);
  }

  if (req.method === "DELETE") {
    const id = String(req.query.id);

    const user = await prisma.events.delete({
      where: {
        id,
      },
    });

    return res.status(201).json(user);
  }

  return res.status(405).end();
}
