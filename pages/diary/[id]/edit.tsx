import Head from 'next/head';

import Form from '@/components/Diary/Form';
import Header from '@/components/Header';

const DiaryDetailEditPage = () => {
  return (
    <>
      <Head>
        <title>Diary New Page</title>
        <meta name="description" content="Diary Edit Page" />
      </Head>
      <Header />
      <Form />
    </>
  );
};

export default DiaryDetailEditPage;
