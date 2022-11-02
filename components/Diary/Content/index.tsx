import { css } from '@emotion/react';
import Link from 'next/link';

import * as S from './Content.style';

import Text from '@/components/common/Text';
import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';
import { GetBoardType } from 'type/Board';
import { calculateDateYMD } from 'utils/date';

const Content = ({ board }: { board: GetBoardType }) => {
  return (
    <>
      <S.ContentContainer>
        <S.ContentHeader>
          <Text
            text={calculateDateYMD(board.createdAt)}
            size="small"
            color={theme.colors.darkGray}
          />
        </S.ContentHeader>
        <Text
          text={board.title}
          size="xRegularFill"
          css={css`
            text-align: center;
            margin-bottom: 2rem;
          `}
        />
        <Text
          text={board.contents}
          size="small"
          css={css`
            padding: 0 3rem;
          `}
        />
      </S.ContentContainer>
      <div
        css={css`
          ${flexbox({ jc: 'center' })};
          gap: 2rem;
        `}
      >
        <S.Button>수정하기</S.Button>
        <S.Button>삭제하기</S.Button>
      </div>
      <Link href="/diary">
        <Text
          text="< 목록으로"
          size="xSmall"
          color={theme.colors.darkGray}
          css={css`
            width: 4rem;
            text-decoration: underline;
            cursor: pointer;
          `}
        />
      </Link>
    </>
  );
};

export default Content;
