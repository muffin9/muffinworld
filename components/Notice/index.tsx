import { useQuery } from '@apollo/client';
import { css } from '@emotion/react';
import Link from 'next/link';

import * as S from './Notice.style';
import NoticeInfo from './NoticeInfo';

import Divider from '@/components/common/Divider';
import Text from '@/components/common/Text';
import { BoardValues } from '@/interfaces/Board';
import { GET_BOARDS } from '@/queries/board';
import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';

const Notice = () => {
  const {
    loading,
    error,
    data: boards,
  } = useQuery(GET_BOARDS, {
    variables: { page: 1 },
  });

  if (loading) return <p>Loading...</p>;

  if (error) {
    return <p>Error :(</p>;
  }

  return (
    <S.NoticeContainer>
      <Text
        text="Updated news"
        size="xRegularFill"
        color={theme.colors.blue}
        css={css`
          margin-bottom: 0.5rem;
        `}
      />
      <div
        css={css`
          ${flexbox({})}
          gap: 1rem;
        `}
      >
        <div>
          <Divider width={15.875} color={theme.colors.gray} />
          <div
            css={css`
              ${flexbox({ dir: 'column' })}
              gap: 0.5rem;
              margin-top: 0.5rem;
            `}
          >
            {boards.fetchBoards.slice(0, 4).map((board: BoardValues) => {
              return (
                <Link href={`/diary/${board.number}`} key={board.number}>
                  <S.RowBox>
                    <S.Tag>
                      <Text
                        text="다이어리"
                        size="xSmall"
                        color={theme.colors.white}
                      />
                    </S.Tag>
                    <Text text={board.title} size="xSmall" />
                  </S.RowBox>
                </Link>
              );
            })}
          </div>
        </div>
        <NoticeInfo />
      </div>
    </S.NoticeContainer>
  );
};

export default Notice;
