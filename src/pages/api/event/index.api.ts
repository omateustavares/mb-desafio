import type { NextApiRequest, NextApiResponse } from "next";
import { setCookie } from "nookies";
import { prisma } from "../../../lib/prisma";
import dayjs from "dayjs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { title, description, date_and_time, local, additional_information } =
      req.body;

    const schedulingDate = dayjs(date_and_time).startOf("hour");

    const user = await prisma.events.create({
      data: {
        title,
        description,
        date_and_time: schedulingDate.toDate(),
        local,
        additional_information,
      },
    });

    return res.status(201).json(user);
  }

  if (req.method === "PUT") {
    const {
      id,
      title,
      description,
      date_and_time,
      local,
      additional_information,
    } = req.body;

    const schedulingDate = dayjs(date_and_time).startOf("hour");

    const user = await prisma.events.update({
      where: { id: id },
      data: {
        title,
        description,
        date_and_time: schedulingDate.toDate(),
        local,
        additional_information,
      },
    });

    return res.status(201).json(user);
  }

  if (req.method === "GET") {
    const user = await prisma.events.findMany();

    return res.status(201).json(user);
  }

  return res.status(405).end();
}
