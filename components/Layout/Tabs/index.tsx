import { css } from '@emotion/react';
import Link from 'next/link';
import { useState } from 'react';

import * as S from './Tabs.style';

import Text from '@/components/common/Text';
import theme from '@/styles/theme';

const Tabs = () => {
  const [type, setType] = useState('home');

  const handleClickType = (tab: string) => {
    setType(tab);
  };

  return (
    <S.TabContainer>
      <Link href="/">
        <S.Tab
          type={type === 'home' ? 1 : 0}
          onClick={() => handleClickType('home')}
        >
          <Text
            text="홈"
            size="small"
            css={css`
              color: ${type === 'home'
                ? theme.colors.black
                : theme.colors.white};
            `}
          />
        </S.Tab>
      </Link>
      <Link href="game">
        <S.Tab
          type={type === 'game' ? 1 : 0}
          onClick={() => handleClickType('game')}
        >
          <Text
            text="게임"
            size="small"
            css={css`
              color: ${type === 'game'
                ? theme.colors.black
                : theme.colors.white};
            `}
          />
        </S.Tab>
      </Link>
      <Link href="diary">
        <S.Tab
          type={type === 'diary' ? 1 : 0}
          onClick={() => handleClickType('diary')}
        >
          <Text
            text="다이어리"
            size="small"
            css={css`
              color: ${type === 'diary'
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
