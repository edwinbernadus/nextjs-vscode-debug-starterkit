// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  let v = 3;
  let z = 8 + v;
  let z2 = z + 11;

  res.status(200).json({ name: 'John Doe' + " " + z2 })
}
