import { css } from '@emotion/react';

import * as S from './Notice.style';

import Divider from '@/components/common/Divider';
import Text from '@/components/common/Text';
import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';

const NoticeInfo = () => {
  return (
    <S.NoticeInfo>
      <Divider
        width={12.125}
        color={theme.colors.darkGray}
        borderStyle="dotted"
      />
      <div
        css={css`
          ${flexbox({})}
          gap: 1rem;
        `}
      >
        <S.RowBox>
          <Text text="다이어리" size="xSmall" />
          <Text text="0/65" size="xSmall" color={theme.colors.blue} />
        </S.RowBox>
        <S.RowBox>
          <Text text="사진첩" size="xSmall" />
          <Text text="0/265" size="xSmall" color={theme.colors.blue} />
        </S.RowBox>
      </div>
      <Divider
        width={12.125}
        color={theme.colors.darkGray}
        borderStyle="dotted"
      />
      <div
        css={css`
          ${flexbox({})}
          gap: 1rem;
        `}
      >
        <S.RowBox>
          <Text text="게시판" size="xSmall" />
          <Text text="0/15" size="xSmall" color={theme.colors.blue} />
        </S.RowBox>
        <S.RowBox>
          <Text text="방명록" size="xSmall" />
          <Text text="0/15" size="xSmall" color={theme.colors.blue} />
        </S.RowBox>
      </div>
      <Divider
        width={12.125}
        color={theme.colors.darkGray}
        borderStyle="dotted"
      />
    </S.NoticeInfo>
  );
};

export default NoticeInfo;
