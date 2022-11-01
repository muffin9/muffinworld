import styled from '@emotion/styled';

import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';

export const CheckBox = styled.input``;

export const MusicHeader = styled.header`
  ${flexbox({ ai: 'center' })}
  gap: 1rem;
  border-top: 2.5px solid ${theme.colors.darkGray};
  border-bottom: 2.5px solid ${theme.colors.darkGray};
  background-color: ${theme.colors.lightGray};
`;

export const MusicRow = styled.div`
  ${flexbox({ ai: 'center' })}
  gap: 1rem;
  border-bottom: 1px dotted ${theme.colors.gray};
`;

export const MusicContainer = styled.section``;
