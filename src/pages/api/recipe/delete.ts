import { NextApiRequest, NextApiResponse } from "next"
import { connectToDatabase } from '../../../services/mongodb'

interface RequestProps {
  user: {
    email: string
  },
  name: string
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    user,
    name,
  }: RequestProps = req.body

  if (!user || !name) {
    res.status(400).send({ message: "Missing body parameters"})
    return 
  }

  const { db, client } = await connectToDatabase();

  if(client.isConnected()) {

    const response = await db
    .collection("users").updateOne({
      email: user.email
    },{
      $pull: { 
        recipes: {
          name
        }
      }
    })

    console.log(response)

    res.status(200).json({ message: "Recipe deleted successfully"})
    return 
  }
  
  res.status(500).json({ error: 'client DB is not connected' })
  return 
}