import { MongoClient } from 'mongodb'

let cachedClient: any = null
let cachedDb: any = null

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb }
  }

  const client = await MongoClient.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  const db = await client.db(process.env.MONGODB_DB)

  cachedClient = client
  cachedDb = db

  return { client, db }
}