import React from 'react';

import * as S from './Card.style';

const Card = ({ children }: { children: React.ReactNode }) => (
  <S.Card>{children}</S.Card>
);

export default Card;
