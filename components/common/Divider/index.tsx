import * as S from './Divider.style';

interface IDivider {
  width: number;
  color: string;
  borderStyle?: string;
}

const Divider = ({
  width,
  color,
  borderStyle = 'solid',
  ...props
}: IDivider) => (
  <S.Divider width={width} color={color} borderStyle={borderStyle} {...props} />
);

export default Divider;
