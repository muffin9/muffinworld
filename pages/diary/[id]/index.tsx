import Head from 'next/head';
import { useRouter } from 'next/router';

import Content from '@/components/Diary/Content';
import Header from '@/components/Header';
import { useRequestQuery } from '@/hooks/useRequestQuery';
import { GET_BOARD } from '@/queries/board';

function DiaryDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  let diaryId = 0;
  if (typeof id === 'string') {
    diaryId = +id;
  }

  const board = useRequestQuery(GET_BOARD, {
    variables: { number: diaryId },
  });

  return (
    <>
      <Head>
        <title>Diary Detail Page</title>
        <meta name="description" content="Diary Detail Page" />
      </Head>
      <Header />
      {board.fetchBoard && <Content board={board.fetchBoard} />}
    </>
  );
}

export default DiaryDetailPage;
