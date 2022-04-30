import { gql } from 'apollo-server-micro';



// ****************************
/* graphql gql types  */
// ****************************

export const mutations = gql`
  type Mutation {
    updateProfile(input: UpdateProfileInput!): User
    updateRating(id:ID!,input: UpdateRatingInput!):Gym
  }
 
  input UpdateProfileInput {
    name: String
    locale: LOCALE
  }
  input UpdateRatingInput{
  countRate:Int!
  score:Int!
  }
`;
