import { css } from '@emotion/react';
import Link from 'next/link';

import * as S from './Header.style';

import Text from '@/components/common/Text';
import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';

const Header = ({ diaryId }: { diaryId?: number }) => (
  <S.Header>
    <div
      css={css`
        ${flexbox({ ai: 'center' })};
        gap: 0.5rem;
      `}
    >
      <Text text="Diary" size="xRegularFill" color={theme.colors.blue} />
      {!diaryId && <Text text="TODAY STORY" size="xSmall" />}
    </div>
    {!diaryId && (
      <Link href="/diary/new">
        <S.DiaryNewButton>다이어리 작성</S.DiaryNewButton>
      </Link>
    )}
  </S.Header>
);

export default Header;
