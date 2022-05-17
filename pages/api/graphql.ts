import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-micro';
import type { NextApiRequest, NextApiResponse } from 'next';

import { verifyToken } from '../../serverApi/lib/verifyToken';
import { mutations } from '../../serverApi/mutations/mutations';
import { queries } from '../../serverApi/queries/queries';
import { resolvers } from '../../serverApi/resolvers';
// const typeDefs = gql`
// type Query {
// Gyms: [Gym!]!
// }

// type Gym {
// id: String!
// gymName: String!
// countRate:Int
// score: Int
// info: String!
// address: String!
// longitude:Float
// latitude:Float
// }
// `;
// const resolvers = {
// Query: {
// Gyms(parent:any, args:any, context:any) {
// return [Gym];
// },
// },
// };

const apolloServer = new ApolloServer({
  typeDefs: [mutations, queries],
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  context: async ({ req }) => {
    const authorizationHeader = req.headers.authorization;
    console.log(authorizationHeader);
    return {
      user: authorizationHeader
        ? await verifyToken(req.headers.authorization)
        : undefined,
    };
  },
});
const startServer = apolloServer.start();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader(
    'Access-Control-Allow-Origin',
    'https://studio.apollographql.com',
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }
  await startServer;
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res);
};
export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
