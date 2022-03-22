import { gql } from 'apollo-server-micro';

// ****************************
/* graphql gql types  */
// ****************************

export const queries = gql`
  type Query {
    Gyms: [Gym!]!
       
  }
 
  type Gym {
    gymName: String!
    id: String!
    score:Int!
    countRate:Int!
    address:String!
    info:String!
  }
  
`;