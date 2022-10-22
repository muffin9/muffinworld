import type { NextPage } from 'next';
import Head from 'next/head';

import InnerBackground from '@/components/InnerBackground';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Muffin World</title>
        <meta
          name="description"
          content="NextJS + GraphQL를 사용하여 만들어보는 추억의 싸이월드"
        />
        <meta property="og:title" content="Muffn Wolrd" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="" />
        <meta property="og:article:author" content="Muffin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InnerBackground />
    </>
  );
};

export default Home;
