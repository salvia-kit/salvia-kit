import { NextApiRequest, NextApiResponse } from 'next';

const client = require('@mailchimp/mailchimp_marketing');

client.setConfig({
  apiKey: process.env.API_KEY,
  server: process.env.API_SERVER,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  switch (req.method) {
    case 'POST':
      try {
        const response = await client.lists.addListMember(process.env.API_ID, {
          email_address: req.body.email,
          status: 'subscribed',
        });
        res.json(response);
      } catch (e) {
        res.status(500).json(e);
      }
      break;
    default:
      return res.status(405).end();
  }
}
