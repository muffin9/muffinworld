import { css } from '@emotion/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import * as S from './Tabs.style';

import Text from '@/components/common/Text';
import theme from '@/styles/theme';
import { currentPath } from '@/utils/router';

const Tabs = () => {
  const router = useRouter();

  const {
    pathname,
    query: { id },
  } = router;

  return (
    <S.TabContainer>
      <Link href="/">
        <S.Tab type={currentPath(pathname) === '' ? 1 : 0}>
          <Text
            text="홈"
            size="small"
            css={css`
              color: ${currentPath(pathname) === ''
                ? theme.colors.black
                : theme.colors.white};
            `}
          />
        </S.Tab>
      </Link>
      <Link href="/game">
        <S.Tab type={currentPath(pathname) === 'game' ? 1 : 0}>
          <Text
            text="게임"
            size="small"
            css={css`
              color: ${currentPath(pathname) === 'game'
                ? theme.colors.black
                : theme.colors.white};
            `}
          />
        </S.Tab>
      </Link>
      <Link href="/diary">
        <S.Tab type={currentPath(pathname) === 'diary' || id ? 1 : 0}>
          <Text
            text="다이어리"
            size="small"
            css={css`
              color: ${currentPath(pathname) === 'diary' || id
                ? theme.colors.black
                : theme.colors.white};
            `}
          />
        </S.Tab>
      </Link>
    </S.TabContainer>
  );
};

export default Tabs;
