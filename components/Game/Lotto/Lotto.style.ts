import styled from '@emotion/styled';

import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';

export const LottoNumbers = styled.div`
  width: 8.125rem;
  height: 1.3rem;
  border: 1px solid ${theme.colors.lightSilver};
  background-color: ${theme.colors.yellow};
  border-radius: 0.5rem;
  padding: 0 0.5rem;
  ${flexbox({ jc: 'space-between', ai: 'center' })}
`;

export const LottoShuffleButton = styled.button`
  width: 3.875rem;
  height: 1.5rem;
  border: 1px solid ${theme.colors.lightSilver};
  border-radius: 5px;
  cursor: pointer;
  transition: 0.1s;

  &:hover {
    color: ${theme.colors.white};
    background-color: ${theme.colors.gray};
  }
`;
