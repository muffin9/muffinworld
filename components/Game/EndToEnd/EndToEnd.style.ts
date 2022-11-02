import styled from '@emotion/styled';

import theme from '@/styles/theme';

export const WordInput = styled.input`
  width: 9rem;
  height: 1.5rem;
  padding: 0.5rem;
  border: 1px solid ${theme.colors.lightSilver};
  border-radius: 5px;
  margin-right: 0.5rem;
`;

export const CheckButton = styled.button`
  width: 2.5rem;
  height: 1.5rem;
  border: 1px solid ${theme.colors.lightSilver};
  border-radius: 5px;
  transition: 0.1s;
  cursor: pointer;

  &:hover {
    color: ${theme.colors.white};
    background-color: ${theme.colors.gray};
  }
`;
