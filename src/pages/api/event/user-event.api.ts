import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const email = String(req.query.email);

    const eventExists: Array<{}> = await prisma.$queryRaw`
    SELECT *
    FROM events
    INNER JOIN user_events ON events.id = user_events.event_id
    WHERE user_events.email_user = ${email}
    `;

    return res.status(201).json(eventExists);
  }

  if (req.method === "POST") {
    const { email_user, id_event } = req.body;

    const eventExists: Array<{}> = await prisma.$queryRaw`
    SELECT *
    FROM user_events
    WHERE email_user = ${email_user}
      AND event_id = ${id_event}
    `;

    if (eventExists[0]) {
      return res.status(400).json({
        message: "Você já está cadastrado nesse evento",
      });
    }

    const user = await prisma.userEvents.create({
      data: {
        email_user,
        event_id: id_event,
      },
    });

    return res.status(201).json(user);
  }

  if (req.method === "DELETE") {
    const id = String(req.query.id);

    const user = await prisma.userEvents.delete({
      where: {
        id,
      },
    });

    return res.status(201).json(user);
  }

  return res.status(405).end();
}
