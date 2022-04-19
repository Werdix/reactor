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
