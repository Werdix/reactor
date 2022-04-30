import { gql } from "@apollo/client";

export const gymsQuery = gql`
  query gyms {
  gyms{
    id
    gymName
    address
    countRate
    score
  }
}
`;

export const updateRatingMutation = gql`
mutation updateRating($rating:Int!,$count:Int!,$id:ID!){
    updateRating(id:$id,input:{score:$rating,countRate:$count}){
    countRate
    score
    }
}
`;