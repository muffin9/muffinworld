import { css } from '@emotion/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import * as S from './Header.style';

import Text from '@/components/common/Text';
import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';

const Header = () => {
  const router = useRouter();
  const { pathname } = router;
  const paths = pathname.split('/');
  const currentPath = paths[paths.length - 1];

  const titleObj = {
    new: <Text text="| 글 등록" size="small" color={theme.colors.blue} />,
    diary: <Text text="TODAY STORY" size="xSmall" />,
  } as any;

  return (
    <S.Header>
      <div
        css={css`
          ${flexbox({ ai: 'center' })};
          gap: 0.5rem;
        `}
      >
        <Text text="Diary" size="xRegularFill" color={theme.colors.blue} />
        {titleObj[currentPath]}
      </div>
      {currentPath === 'diary' && (
        <Link href="/diary/new">
          <S.DiaryNewButton>다이어리 작성</S.DiaryNewButton>
        </Link>
      )}
    </S.Header>
  );
};

export default Header;
