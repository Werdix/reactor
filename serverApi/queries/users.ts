export type User = {
  name: string;
  id: string;
}

export const users = async (_parent: any, _args: any, context: any): Promise<User[]> => {
  return [{name: 'Pepa', id: '1'}, {name: 'Eva', id: '2'}]
}
