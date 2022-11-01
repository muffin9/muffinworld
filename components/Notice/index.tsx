import { css } from '@emotion/react';

import * as S from './Notice.style';
import NoticeInfo from './NoticeInfo';

import Divider from '@/components/common/Divider';
import Text from '@/components/common/Text';
import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';

const Notice = () => {
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
            <S.RowBox>
              <S.Tag>
                <Text
                  text="다이어리"
                  size="xSmall"
                  color={theme.colors.white}
                />
              </S.Tag>
              <Text text="내용 채우기" size="xSmall" />
            </S.RowBox>
            <S.RowBox>
              <S.Tag>
                <Text
                  text="다이어리"
                  size="xSmall"
                  color={theme.colors.white}
                />
              </S.Tag>
              <Text text="내용 채우기" size="xSmall" />
            </S.RowBox>
            <S.RowBox>
              <S.Tag>
                <Text
                  text="다이어리"
                  size="xSmall"
                  color={theme.colors.white}
                />
              </S.Tag>
              <Text text="내용 채우기" size="xSmall" />
            </S.RowBox>
            <S.RowBox>
              <S.Tag>
                <Text
                  text="다이어리"
                  size="xSmall"
                  color={theme.colors.white}
                />
              </S.Tag>
              <Text text="내용 채우기" size="xSmall" />
            </S.RowBox>
          </div>
        </div>
        <NoticeInfo />
      </div>
    </S.NoticeContainer>
  );
};

export default Notice;
