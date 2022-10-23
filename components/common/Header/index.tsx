import * as S from './Header.style';

import Text from '@/components/common/Text';
import theme from '@/styles/theme';

const Header = () => (
  <S.HeaderWrapper>
    <S.Counts>
      <Text text="TODAY" size="xSmall" color={theme.colors.black} />
      <Text text="0" size="small" color={theme.colors.red} />
      <S.Vertical />
      <Text text="TOTAL" size="xSmall" color={theme.colors.black} />
      <Text text="12345" size="small" color={theme.colors.black} />
    </S.Counts>
    <S.Contents>
      <Text
        text="사이좋은 사람들, 싸이월드"
        size="xRegularFill"
        color={theme.colors.blue}
      />
      <S.PrivacyWrapper>
        <Text text="사생활보호설정" size="small" color={theme.colors.black} />
        <S.Arrow>▶️</S.Arrow>
      </S.PrivacyWrapper>
    </S.Contents>
  </S.HeaderWrapper>
);

export default Header;
