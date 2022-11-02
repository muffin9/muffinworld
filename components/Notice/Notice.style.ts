import styled from '@emotion/styled';

import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';

export const Tag = styled.div`
  width: 3rem;
  height: 1rem;
  background-color: ${theme.colors.pink};
  ${flexbox({ jc: 'center', ai: 'center' })}
`;

export const RowBox = styled.div`
  width: 15.875rem;
  cursor: pointer;
  ${flexbox({ ai: 'center' })}
  gap: 0.5rem;
`;

export const NoticeInfo = styled.article`
  width: 12.125rem;
  ${flexbox({ dir: 'column' })}
  gap: 0.2rem;
`;

export const NoticeContainer = styled.section`
  margin-bottom: 2rem;
`;
