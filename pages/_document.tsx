import Document, {DocumentContext, Head, Html, Main, NextScript} from 'next/document';
import {CssBaseline} from '@nextui-org/react';

const NextDocument = () => {
  return (
    <Html>
      <Head>
        {CssBaseline.flush()}
      </Head>
      <body>
      <Main/>
      <NextScript/>
      </body>
    </Html>
  );
}

NextDocument.getInitialProps = async (ctx: DocumentContext) => {
  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: <>{initialProps.styles}</>
  };
}

export default NextDocument;