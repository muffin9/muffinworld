import styled from '@emotion/styled';

import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';

export const Tag = styled.div`
  width: 74px;
  height: 1rem;
  background-color: ${theme.colors.blue};
  ${flexbox({ jc: 'center', ai: 'center' })}
`;

export const DiaryBox = styled.div`
  height: 4rem;
  margin-bottom: 0.625rem;
  padding: 1rem 2rem;
  border: 1px solid ${theme.colors.gray};
  border-radius: 2px;
  ${flexbox({ jc: 'space-between', ai: 'center' })};
`;

export const DiaryContainer = styled.section``;
