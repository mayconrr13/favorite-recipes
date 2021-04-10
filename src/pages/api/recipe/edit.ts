import { NextApiRequest, NextApiResponse } from "next"
import { connectToDatabase } from '../../../services/mongodb'

interface RequestProps {
  email: string;
  id: string;
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
    id,
    name,
    images,
    preparationTime,
    serving,
    difficulty,
    ingredients,
    directions
  }: RequestProps = req.body

  if (
    !id ||
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

    try {
      const response = await db
      .collection("users").findOneAndUpdate(
        { email : email },
        { $set: {
          "recipes.$[elem].name" : name,
          "recipes.$[elem].images" : images,
          "recipes.$[elem].preparationTime" : preparationTime,
          "recipes.$[elem].serving" : serving,
          "recipes.$[elem].difficulty" : difficulty,
          "recipes.$[elem].ingredients" : ingredients,
          "recipes.$[elem].directions" : directions,
        } },
        { arrayFilters: [ { "elem.id": { $eq: id } } ] }
     )

      res.status(200).json(response)
      return 
    } catch {
        res.status(400).send({ message: "The object you trying to update doesn't exist."})
        return 
      }
  }
  
  res.status(500).json({ error: 'client DB is not connected' })
  return 
}