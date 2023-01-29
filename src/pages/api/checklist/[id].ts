import ChecklistCookieModel from '@/features/checklist/data/checklist.cookie.model';
import sleep from '@/shared/utils/sleep.util';
import Cookies from 'cookies';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, query, body } = req;
  const cookies = new Cookies(req, res);
  const checklistModel = new ChecklistCookieModel(cookies);

  await sleep();

  if (method === 'PUT') {
    checklistModel.findByIdAndUpdate(query.id as string, body);
    res.status(200).json({
      statusCode: 200,
    });
  } else if (method === 'DELETE') {
    checklistModel.findByIdAndDelete(query.id as string);
    res.status(200).json({
      statusCode: 200,
    });
  } else {
    res.setHeader('Allow', ['DELETE', 'PUT']);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
