import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import {
    ApolloServer,
    gql,
  } from 'apollo-server-micro';
  import type {
    NextApiRequest,
    NextApiResponse,
  } from 'next';
import { mutations } from '../../serverApi/mutations/mutations';
import { queries } from '../../serverApi/queries/queries';
//import  {resolvers}  from '../../serverApi/resolvers';
  const typeDefs = gql`
    type Query {
    Gyms: [Gym!]!
    }
    type Gym {
    id: String!
    gymName: String!
    countRate:Int
    score: Int
    info: String!
    address: String!
    }
  `;
  const resolvers = {
    Query: {
      Gyms(parent:any, args:any, context:any) {
        return [{ gymName: "Gym22" }];
      },
    },
  };

  const apolloServer = new ApolloServer({ typeDefs:[mutations,queries], resolvers, plugins:[ApolloServerPluginLandingPageGraphQLPlayground()] });
  const startServer = apolloServer.start();
  const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader(
      "Access-Control-Allow-Origin",
      "https://studio.apollographql.com"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    if (req.method === "OPTIONS") {
      res.end();
      return false;
    }
    await startServer;
    await apolloServer.createHandler({
      path: "/api/graphql",
    })(req, res);
  };
  export const config = {
    api: {
      bodyParser: false,
    },
  };
  
  export default handler;