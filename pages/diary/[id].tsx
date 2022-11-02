import { useQuery } from '@apollo/client';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Content from '@/components/Diary/Content';
import Header from '@/components/Diary/Header';
import { GET_BOARD } from '@/queries/board';

function DiaryDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  let diaryId = 0;
  if (typeof id === 'string') {
    diaryId = +id;
  }

  const {
    loading,
    error,
    data: board,
  } = useQuery(GET_BOARD, {
    variables: { number: diaryId },
  });

  if (loading) return <p>Loading...</p>;

  if (error) {
    return <p>Error :(</p>;
  }

  return (
    <>
      <Head>
        <title>Diary Detail Page</title>
        <meta name="description" content="Diary Detail Page" />
      </Head>
      <Header />
      <Content board={board.fetchBoard} />
    </>
  );
}

export default DiaryDetailPage;
