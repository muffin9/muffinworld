import dynamic from 'next/dynamic';
import Head from 'next/head';

import LoadingSpinner from '@/components/common/LoadingSpinner';
import Music from '@/components/Music';

const Notice = dynamic(() => import('@/components/Notice'), {
  loading: () => <LoadingSpinner size="xLarge" />,
  ssr: false,
});

const Home = () => {
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
      <Notice />
      <Music />
    </>
  );
};

export default Home;
