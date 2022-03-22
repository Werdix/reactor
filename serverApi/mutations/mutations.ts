import { gql } from 'apollo-server-micro';

// ****************************
/* graphql gql types  */
// ****************************
export const mutations = gql`
  type Mutation {
    updateProfile(input: UpdateProfileInput!): Gym
  }
 
  input UpdateProfileInput {
    name: String
    
  }
  
 
`;