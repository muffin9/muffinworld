import * as S from './Image.style';

interface IImage {
  url: string;
  alt: string;
}

const Image = ({ url, alt, ...props }: IImage) => (
  <S.Image src={url} alt={alt} {...props} />
);

export default Image;
