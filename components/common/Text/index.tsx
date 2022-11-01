import * as S from './Text.style';

import theme from '@/styles/theme';

interface IText {
  text: string;
  size:
    | 'xLargeFill'
    | 'xLarge'
    | 'large'
    | 'xRegularFill'
    | 'xRegular'
    | 'regular'
    | 'small'
    | 'xSmall';
  color?: string;
}

const Text = ({
  text,
  size = 'regular',
  color = theme.colors.black,
  ...props
}: IText) => (
  <S.Text size={size} color={color} {...props}>
    {text}
  </S.Text>
);

export default Text;
