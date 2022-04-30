import { Gym } from "../../generated/graphql";
import { db, getCollection } from "../lib/db"


type UpdateRatingInput={
    countRate:number;
    score:number;
}
export const updateRating = async (_parent: any, args: { id:string,input: UpdateRatingInput }, context: any, _info: any): Promise<Gym> => {

  const {score, countRate} = args.input;

  const query = getCollection<Gym>('gyms').where("id", "==", args.id);
  const snapshot = await query.get();
  const docs = snapshot.docs.map(doc=>doc.data());
  
  
 
  const mutation = getCollection<Gym>('gyms').doc();
  const updateRate = await mutation.update({'countRate':countRate + 1,'score':score});
  
  return {score,countRate}
}