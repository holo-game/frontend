import Head from "next/head";
import { META, APP_NAME, API_URI } from "@/constants";

export default function MyHead({ title, description, keywords, url, image }) {
  return (
    <Head>
      <title>{title} | Hologame</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={APP_NAME} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${API_URI}${image}`} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
      />
    </Head>
  );
}

MyHead.defaultProps = {
  ...META,
};
