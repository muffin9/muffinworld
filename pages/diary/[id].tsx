import Head from 'next/head';
import { useRouter } from 'next/router';

function DiaryDetailPage() {
  const router = useRouter();
  const { diaryId } = router.query;

  return (
    <>
      <Head>
        <title>Diary Detail Page</title>
        <meta name="description" content="Diary Detail Page" />
      </Head>
      <h1>Diary Detail Page</h1>
    </>
  );
}

export default DiaryDetailPage;
