import styled from '@emotion/styled';

import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';

export const Card = styled.div`
  width: 222px;
  height: 165px;
  border: 1px solid ${theme.colors.lightSilver};
  background-color: ${theme.colors.lightGray};
  border-radius: 10px;
  padding: 1rem 0.5rem;
  ${flexbox({ dir: 'column', ai: 'center', jc: 'center' })};
  gap: 0.5rem;
`;
