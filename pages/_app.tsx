import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client';
import { getApolloClient } from '../lib/apollo';

function MyApp({ Component, pageProps }: AppProps) {
  const client = getApolloClient();
  console.log(client);
  return <ApolloProvider client={client}>
  <Component {...pageProps} />
  </ApolloProvider>
}
export default MyApp