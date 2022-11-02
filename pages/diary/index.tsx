import Head from 'next/head';

import Diary from '@/components/Diary/Diary';
import Header from '@/components/Header';

const DiaryPage = () => {
  return (
    <>
      <Head>
        <title>Diary Page</title>
        <meta name="description" content="Diary Page" />
      </Head>
      <Header />
      <Diary />
    </>
  );
};

export default DiaryPage;
