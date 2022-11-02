import styled from '@emotion/styled';

import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';

export const DiaryNewButton = styled.button`
  width: 5.625rem;
  height: 1.375rem;
  border-radius: 5px;
  padding: 2px 1px 1px;
  border: 1px solid ${theme.colors.gray};
  transition: 0.1s;

  &:hover {
    color: ${theme.colors.white};
    background-color: ${theme.colors.gray};
  }
`;

export const Header = styled.header`
  height: 1.75rem;
  border-bottom: 1px solid ${theme.colors.gray};
  margin-bottom: 1rem;
  ${flexbox({ jc: 'space-between' })};
`;
