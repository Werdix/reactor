export type Gym = {
    name: string;
    id: string;
    
  }
  export const users = async (_parent: any, _args: any, context: any): Promise<Gym[]> => {
    return [{name: 'Pepa', id: '1'}, {name: 'Eva', id: '2'}]
  }