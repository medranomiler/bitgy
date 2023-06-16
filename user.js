// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectMongo from '../../lib/connectMongo';
import User from "../../models/User"

export default function handler(req, res) {
  switch (req.method){
    case 'POST': {
      return addUser(req, res)
    }
    default: {
      return res.status(405).json({ error: 'Method not allowed'})
    }
  }
}

async function addUser(req, res) {
  try {
    await connectMongo();

    const user = await User.create(req.body);

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
