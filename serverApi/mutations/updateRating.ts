import { Gym } from "../../generated/graphql";


type UpdateRatingInput={
    id:number;
    countRate:number;
    score:number;
}
export const updateProfile = async (_parent: any, args: { input: UpdateRatingInput }, context: any, _info: any): Promise<Gym> => {
    return { countRate:args.input.countRate, score:args.input.score,id:args.input.id }
  }