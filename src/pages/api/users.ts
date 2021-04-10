import { NextApiRequest, NextApiResponse } from "next"
import { connectToDatabase } from '../../services/mongodb'

interface RequestProps {
  name: string;
  email: string;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {name, email}: RequestProps = req.body

  if (!name || !email) {
    res.status(400).send({ message: "Missing body parameters"})
    return 
  }

  const { db, client } = await connectToDatabase();

  if(client.isConnected()) {
    const user = await db.collection('users').findOne({ email})

    if (!user) {
      const response = await db
      .collection("users").insertOne({
        name,
        email,
        recipes: []
      })
      console.log(response.ops[0])
      res.status(200).json(response.ops[0])
      return 
    }
    console.log(user)
    res.status(200).json(user)    
    return 
  }

  res.status(500).json({ error: 'client DB is not connected' })
  return 
}