import { NextApiRequest, NextApiResponse } from "next"
import { connectToDatabase } from '../../../services/mongodb'
import {v4 as uuidv4} from 'uuid'

interface RequestProps {
  email: string
  name: string;
  images: Array<string>;
  preparationTime: string;
  serving: string;
  difficulty: "easy" | "medium" | "hard";
  ingredients: Array<string>;
  directions: string;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    email,
    name,
    images,
    preparationTime,
    serving,
    difficulty,
    ingredients,
    directions
  }: RequestProps = req.body

  if (
    !name ||
    !images ||
    !preparationTime ||
    !serving ||
    !difficulty ||
    !ingredients ||
    !directions) {
    res.status(400).send({ message: "Missing body parameters"})
    return 
  }

  const { db, client } = await connectToDatabase();

  if(client.isConnected()) {

    const response = await db
    .collection("users").updateOne({
      email: email
    }, {
      $push: {
        recipes:
          {
            id: uuidv4(),
            name,
            images,
            preparationTime,
            serving,
            difficulty,
            ingredients,
            directions
          }
      }}, {})

    res.status(200).json({ message: 'Recipe successfully added' })
    return 
  }
  
  res.status(500).json({ error: 'client DB is not connected' })
  return 
}