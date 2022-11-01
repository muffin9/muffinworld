import Link from 'next/link';
import React from 'react';

import * as S from './Content.style';

import Text from '@/components/common/Text';
import theme from '@/styles/theme';

interface LayoutProps {
  children: React.ReactNode;
}

const ContentLayout = ({ children }: LayoutProps) => (
  <S.ContentLayout>
    {children}
    <S.TabContainer>
      <Link href="/">
        <S.Tab>
          <Text text="홈" size="small" color={theme.colors.white} />
        </S.Tab>
      </Link>
      <Link href="game">
        <S.Tab>
          <Text text="게임" size="small" color={theme.colors.white} />
        </S.Tab>
      </Link>
      <Link href="diary">
        <S.Tab>
          <Text text="다이어리" size="small" color={theme.colors.white} />
        </S.Tab>
      </Link>
    </S.TabContainer>
  </S.ContentLayout>
);

export default ContentLayout;
