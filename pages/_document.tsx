import { getDataFromTree } from '@apollo/client/react/ssr';
import Document, { DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import { getApolloClient } from '../lib/apollo';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const apolloClient = getApolloClient(true);
    // @ts-ignore
    await getDataFromTree(<ctx.AppTree {...ctx.appProps} />);

    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      /**
       * Extract the cache to pass along to the client so the queries are "hydrated" and don't need to actually request the data again!
       */
      const apolloState = apolloClient.extract();

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
        apolloState,
      };
    } finally {
      sheet.seal();
    }
  }
}
