import dynamic from 'next/dynamic';
import Head from 'next/head';

import LoadingSpinner from '@/components/common/LoadingSpinner';
import Header from '@/components/Header';

const DiaryList = dynamic(() => import('@/components/Diary/DiaryList'), {
  loading: () => <LoadingSpinner size="xLarge" />,
  ssr: false,
});

const DiaryPage = () => {
  return (
    <>
      <Head>
        <title>Diary Page</title>
        <meta name="description" content="Diary Page" />
      </Head>
      <Header />
      <DiaryList />
    </>
  );
};

export default DiaryPage;
