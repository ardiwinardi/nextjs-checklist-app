import ChecklistCookieModel from '@/features/checklist/data/checklist.cookie.model';
import { Checklist } from '@/features/checklist/domain/checklist.entity';
import sleep from '@/shared/utils/sleep.util';
import Cookies from 'cookies';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body } = req;
  const cookies = new Cookies(req, res);
  const checklistModel = new ChecklistCookieModel(cookies);

  if (method === 'GET') {
    const checklist = checklistModel.getAll();
    res.status(200).json({
      statusCode: 200,
      data: checklist,
    });
  } else if (method === 'POST') {
    await sleep();

    const payload: Partial<Checklist> = {
      name: body.name,
      createdAt: new Date(),
    };
    checklistModel.create(payload);
    res.status(201).json({ statusCode: 201 });
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
