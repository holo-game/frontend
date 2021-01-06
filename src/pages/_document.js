import Document, { Html, Head, Main, NextScript } from "next/document";
import { LIVE_SUPPORT } from "@/constants";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="az">
        <Head />
        <body>
          <Main />
          <NextScript />
          <div dangerouslySetInnerHTML={{ __html: LIVE_SUPPORT }} />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
