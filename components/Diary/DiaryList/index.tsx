import { css } from '@emotion/react';
import Link from 'next/link';

import * as S from './DiaryList.style';

import Text from '@/components/common/Text';
import { useRequestQuery } from '@/hooks/useRequestQuery';
import { GET_BOARDS } from '@/queries/board';
import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';
import { calculateDateYMD } from '@/utils/date';
import { GetBoardsType } from 'type/Board';

const DiaryList = () => {
  const boards = useRequestQuery(GET_BOARDS, {
    variables: { page: 1 },
  });

  return (
    <S.DiaryContainer>
      {boards.fetchBoards &&
        boards.fetchBoards.slice(0, 5).map((board: GetBoardsType) => {
          return (
            <S.DiaryBox key={board.number}>
              <div
                css={css`
                  ${flexbox({ dir: 'column' })};
                  gap: 0.5rem;
                `}
              >
                <S.Tag>
                  <Text
                    text={calculateDateYMD(board.createdAt)}
                    size="xSmall"
                    color={theme.colors.white}
                  />
                </S.Tag>
                <Text
                  text={board.title}
                  size="xSmall"
                  css={css`
                    font-weight: 700;
                  `}
                />
              </div>
              <Link href={`/diary/${board.number}`}>
                <Text
                  text="자세히 보러가기 >"
                  size="small"
                  color={theme.colors.gray}
                  css={css`
                    text-decoration: underline;
                    cursor: pointer;
                    &:hover {
                      color: ${theme.colors.black};
                    }
                  `}
                />
              </Link>
            </S.DiaryBox>
          );
        })}
    </S.DiaryContainer>
  );
};

export default DiaryList;
