import { useMutation } from '@apollo/client';
import { css } from '@emotion/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import * as S from './Content.style';

import Text from '@/components/common/Text';
import { GET_BOARDS, DELETE_BOARD } from '@/queries/board';
import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';
import { calculateDateYMD } from '@/utils/date';
import { GetBoardType } from 'type/Board';

const Content = ({ board }: { board: GetBoardType }) => {
  const router = useRouter();
  const [deleteBoard, { data, loading, error }] = useMutation(DELETE_BOARD, {
    variables: {
      number: board.number,
    },
    refetchQueries: [{ query: GET_BOARDS, variables: { page: 1 } }],
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  if (data) {
    router.push('/diary');
  }

  const handleDelete = () => {
    deleteBoard();
  };

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
        <Link
          href={{
            pathname: `/diary/${board.number}/edit`,
            query: { title: board.title, contents: board.contents },
          }}
        >
          <S.Button>수정하기</S.Button>
        </Link>
        <S.Button onClick={handleDelete}>삭제하기</S.Button>
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
