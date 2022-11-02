import { css } from '@emotion/react';
import Head from 'next/head';

import EndToEnd from '@/components/Game/EndToEnd';
import Lotto from '@/components/Game/Lotto';
import Header from '@/components/Header';
import { flexbox } from '@/styles/mixin';

const GamePage = () => {
  return (
    <>
      <Head>
        <title>Game Page</title>
        <meta name="description" content="Game Page" />
      </Head>
      <Header />
      <div
        css={css`
          ${flexbox({ dir: 'column', ai: 'center' })};
          gap: 1.5rem;
        `}
      >
        <EndToEnd />
        <Lotto />
      </div>
    </>
  );
};

export default GamePage;
