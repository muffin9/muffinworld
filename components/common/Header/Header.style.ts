import styled from '@emotion/styled';

import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';

export const Vertical = styled.div`
  width: 1px;
  height: 8px;
  background-color: ${theme.colors.blue};
`;

export const Arrow = styled.div`
  color: ${theme.colors.orange};
`;

export const Counts = styled.div`
  width: 30%;
  ${flexbox({ jc: 'center', ai: 'center' })}
  gap: 0.5rem;
`;

export const Contents = styled.div`
  width: 70%;
  ${flexbox({ jc: 'space-between', ai: 'flex-end' })}
`;

export const PrivacyWrapper = styled.div`
  ${flexbox({})}
`;

export const HeaderWrapper = styled.header`
  ${flexbox({})}
  padding: 0 1rem;
  margin-top: 1.625rem;
  margin-bottom: 3px;
`;
