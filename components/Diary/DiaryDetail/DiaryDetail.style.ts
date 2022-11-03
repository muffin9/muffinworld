import styled from '@emotion/styled';

import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';

export const ContentHeader = styled.header`
  ${flexbox({ ai: 'center' })}
  width: 100%;
  height: 1.625rem;
  padding: 0 1rem;
  margin-bottom: 1.5rem;
  background-color: ${theme.colors.lightSilver};
`;

export const Button = styled.button`
  width: 4.375rem;
  height: 1.5rem;
  border: 1px solid ${theme.colors.lightSilver};
  border-radius: 3px;
  background-color: ${theme.colors.lightSilver};
  cursor: pointer;
  &:hover {
    color: ${theme.colors.white};
    background-color: ${theme.colors.gray};
  }
`;

export const ContentContainer = styled.section`
  ${flexbox({ dir: 'column', ai: 'center' })}
  height: 18.75rem;
  border: 1px solid ${theme.colors.lightGray};
  margin-bottom: 1rem;
`;
