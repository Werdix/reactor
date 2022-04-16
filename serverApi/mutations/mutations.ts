import { gql } from 'apollo-server-micro';



// ****************************
/* graphql gql types  */
// ****************************

export const mutations = gql`
  type Mutation {
    updateProfile(input: UpdateProfileInput!): User
  }
 
  input UpdateProfileInput {
    name: String
    locale: LOCALE
  }
  
 
`;
