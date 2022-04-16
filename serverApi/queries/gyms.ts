import { getCollection } from "../lib/db"



type Gym={
  id:Number
  gymName:String
  address:String
  countRate:Number
  score:Number
  
}  

export const gyms = async (_parent: any, _args: any, _context: any) : Promise<Gym[]> => {
  
  const query = await getCollection<Gym>('gyms');
  const snapshot = await query.get();
  const docs = snapshot.docs.map(doc=>doc.data())
  
  return docs;
}
