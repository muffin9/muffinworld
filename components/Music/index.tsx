import { css } from '@emotion/react';
import React, { useEffect, useState } from 'react';

import * as S from './Music.style';

import Text from '@/components/common/Text';
import { MusicValues } from '@/interfaces/Music';
import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';

type MusicDataType = MusicValues & { checked: boolean };

const musicData: MusicValues[] = [
  {
    id: 1,
    num: 1,
    name: ' Nxde',
    artist: '여자 아이들',
  },
  {
    id: 2,
    num: 2,
    name: '사건의 지평선',
    artist: '윤하',
  },
  {
    id: 3,
    num: 3,
    name: '새삥',
    artist: 'ZICO',
  },
  {
    id: 4,
    num: 4,
    name: 'ANTIFRAGILE',
    artist: 'LE SSERAFIM',
  },
  {
    id: 5,
    num: 5,
    name: 'After LIKE',
    artist: 'IVE (아이브)',
  },
  {
    id: 6,
    num: 6,
    name: 'Hype boy',
    artist: 'NewJeans',
  },
  {
    id: 7,
    num: 7,
    name: 'Rush Hour',
    artist: 'Crush',
  },
  {
    id: 8,
    num: 8,
    name: 'Attention',
    artist: 'NewJeans',
  },
  {
    id: 9,
    num: 9,
    name: 'Shut Down',
    artist: 'BLACKPINK',
  },
  {
    id: 10,
    num: 10,
    name: 'Monologue',
    artist: 'Tei',
  },
];

const Music = () => {
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState<number[]>([]);
  const [musicList, setMusicList] = useState<MusicDataType[]>([]);

  useEffect(() => {
    const newMusics = musicData.map((music: MusicValues) => {
      return { ...music, checked: false };
    });

    setMusicList(newMusics);
  }, []);

  const handleSelectAll = () => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(musicList.map((li: MusicDataType) => li.id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  const handleCheckOnChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const id = +target.id;
    setIsCheck([...isCheck, id]);

    if (!target.checked) {
      setIsCheck(isCheck.filter(item => item !== id));
    }
  };

  return (
    <>
      <div
        css={css`
          ${flexbox({ ai: 'center' })}
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        `}
      >
        <Text text="추억의 BGM" size="xRegularFill" color={theme.colors.blue} />
        <Text text="TODAY MUSIC" size="xSmall" color={theme.colors.gray} />
      </div>
      <S.MusicContainer>
        <S.MusicHeader>
          <S.CheckBox
            type="checkbox"
            id="selectAll"
            onChange={handleSelectAll}
            checked={isCheckAll}
          />
          <Text
            text="번호"
            size="xSmall"
            css={css`
              flex-basis: 3.125rem;
              text-align: center;
            `}
          />
          <Text
            text="곡명"
            size="xSmall"
            css={css`
              flex-basis: 13.75rem;
            `}
          />
          <Text text="아티스트" size="xSmall" />
        </S.MusicHeader>
        {musicList.map((music: MusicDataType) => {
          return (
            <S.MusicRow key={music.id}>
              <S.CheckBox
                type="checkbox"
                id={`${music.id}`}
                onChange={e => handleCheckOnChange(e)}
                checked={isCheck.includes(music.id as never)}
              />
              <Text
                text={`${music.num}`}
                size="xSmall"
                color={theme.colors.darkBlue}
                css={css`
                  flex-basis: 3.125rem;
                  text-align: center;
                `}
              />
              <Text
                text={`${music.name}`}
                size="xSmall"
                color={theme.colors.darkBlue}
                css={css`
                  flex-basis: 13.75rem;
                `}
              />
              <Text
                text={`${music.artist}`}
                size="xSmall"
                color={theme.colors.darkBlue}
              />
            </S.MusicRow>
          );
        })}
      </S.MusicContainer>
    </>
  );
};

export default Music;
