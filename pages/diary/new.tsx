import Head from 'next/head';

import Form from '@/components/Diary/Form';
import Header from '@/components/Diary/Header';

const DiaryNewPage = () => {
  return (
    <>
      <Head>
        <title>Diary New Page</title>
        <meta name="description" content="Diary New Page" />
      </Head>
      <Header />
      <Form />
    </>
  );
};

export default DiaryNewPage;
