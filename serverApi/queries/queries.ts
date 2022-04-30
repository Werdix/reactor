import { gql } from 'apollo-server-micro';


// ****************************
/* graphql gql types  */
// ****************************


export const queries = gql`
  type Query {
    users: [User!]!
    locales: [LOCALE!]!   
    gyms: [Gym!]! 
  }
 
type Gym{
id:ID!
gymName:String
address:String
countRate:Int!
score:Int!
}

  type User {
    name: String!
    id: ID!
    locale: LOCALE
    picture: String
    email: String
  }
  
  enum LOCALE {
   CS
   EN
  }
`;
