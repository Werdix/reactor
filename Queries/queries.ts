import { gql } from "apollo-server-micro";

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
