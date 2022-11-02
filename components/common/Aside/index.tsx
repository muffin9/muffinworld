import { css } from '@emotion/react';

import * as S from './Aside.style';

import Divider from '@/components/common/Divider';
import Image from '@/components/common/Image';
import Text from '@/components/common/Text';
import theme from '@/styles/theme';

const Aside = () => (
  <S.AsideWrapper>
    <S.ProfileImage />
    <Divider
      width={9.25}
      color={theme.colors.lightGray}
      css={css`
        margin: 0.875rem 0;
      `}
    />
    <S.ProfileContent>
      <S.RowBox>
        <Image url="/name.png" alt="이름" />
        <Text text="Muffin" size="xSmall" color={theme.colors.black} />
      </S.RowBox>
      <S.RowBox>
        <Image url="/phone.png" alt="휴대폰번호" />
        <Text text="010-0000-0000" size="xSmall" color={theme.colors.black} />
      </S.RowBox>
      <S.RowBox>
        <Image url="/email.png" alt="이메일" />
        <Text
          text="jinlog9@gmail.com"
          size="xSmall"
          color={theme.colors.black}
        />
      </S.RowBox>
      <S.RowBox>
        <Image url="/star.png" alt="인스타그램" />
        <Text text="인스타그램" size="xSmall" color={theme.colors.black} />
      </S.RowBox>
    </S.ProfileContent>
    <S.Feelings>
      <S.FeelingsLabel htmlFor="feelings">오늘의 기분</S.FeelingsLabel>
      <S.FeelingSelectBox name="기쁨" id="feelings">
        <S.FeelingOption value="happy">기쁨 😻</S.FeelingOption>
        <S.FeelingOption value="depressed">우울 😿</S.FeelingOption>
        <S.FeelingOption value="sleep">졸림 😴</S.FeelingOption>
      </S.FeelingSelectBox>
    </S.Feelings>
  </S.AsideWrapper>
);

export default Aside;
