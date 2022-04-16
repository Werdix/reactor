import { User } from "../queries";

type UpdateProfileInput = {
  name: string;
  id: string;
  
}

export const updateProfile = async (_parent: any, args: { input: UpdateProfileInput }, context: any, _info: any): Promise<User> => {
  return {id: args.input.id, name: args.input.name }
}
