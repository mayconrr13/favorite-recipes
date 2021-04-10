import { NextApiRequest, NextApiResponse } from "next"
import { connectToDatabase } from '../../../services/mongodb'

interface RequestProps {
  email: string;
}

interface Recipe {
  name: string;
  images: Array<string>;
  preparationTime: string;
  serving: string;
  difficulty: "easy" | "medium" | "hard";
  ingredients: Array<string>;
  directions: string;
}

interface ResponseProps {
  recipes: Recipe[];
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.query

  if (!email) {
    res.status(400).send({ message: "E-mail not found"})
    return 
  }

  const { db, client } = await connectToDatabase();

  if(client.isConnected()) {

    const recipesList = await db
    .collection("users").findOne({
      email: email,
    })

    res.status(200).json(recipesList.recipes)
    return recipesList
  }
  
  res.status(500).json({ error: 'client DB is not connected' })
  return 
}