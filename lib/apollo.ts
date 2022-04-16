import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// import 'firebase/compat/auth
import { isServer } from './utils';

//source: https://github.com/shshaw/next-apollo-ssr

//@ts-ignore
const windowApolloState = !isServer && window.__NEXT_DATA__.apolloState;

let CLIENT: ApolloClient<any>;

const endpoint = `${process.env.NEXT_PUBLIC_API_PATH}/graphql`;

const httpLink = (): HttpLink => {
  if (typeof window === 'undefined') {
    return new HttpLink({
      uri: endpoint,
      credentials: 'same-origin',
      headers: {
      },
    });
  } else {
    return new HttpLink({
      uri: endpoint,
      credentials: 'same-origin',
      headers: {
        //jakakoliv hlavička musí byt povolena v CORS
      },
    });
  }
};

// const authLink = setContext(async (req, { headers }) => {
//   if (typeof window === 'undefined') {
//     //chceme dělat SSR, jen je třeba volat na SSR metody, které jsou veřejné a nezávisí na userovi
//     console.log('Authentikaci na serveru, metoda ', req.operationName);
//     // return the headers to the context so httpLink can read them
//     return {
//       headers,
//     };
//   }
//   const user = firebase.auth().currentUser || null;
//   const jwtToken = user ? await user.getIdToken() : null;

//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: jwtToken ? `Bearer ${jwtToken}` : '',
//     },
//   };
// });

export function getApolloClient(forceNew?: boolean) {
  if (!CLIENT || forceNew) {
    CLIENT = new ApolloClient({
      ssrMode: isServer,
      uri: endpoint,
      cache: new InMemoryCache().restore(windowApolloState || {}),
      credentials: 'same-origin',
      link: ApolloLink.from([
        //authLink,
        httpLink(),
      ]),
      /**
        // Default options to disable SSR for all queries.
        defaultOptions: {
          // Skip queries when server side rendering
          // https://www.apollographql.com/docs/react/data/queries/#ssr
          watchQuery: {
            ssr: false
          },
          query: {
            ssr: false
          }
          // Selectively enable specific queries like so:
          // `useQuery(QUERY, { ssr: true });`
        }
      */
    });
  }

  return CLIENT;
}


