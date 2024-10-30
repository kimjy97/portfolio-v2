import { MongoClient, Db } from 'mongodb';

let client: MongoClient | null = null;

async function dbConnect(): Promise<Db> {
  const uri = process.env.MONGODB_URI || '';
  const database = 'portfolio';

  if (!client) {
    client = new MongoClient(uri);
    await client.connect();
  }

  return client.db(database);
}

export default dbConnect;