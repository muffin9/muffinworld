import styled from '@emotion/styled';

import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';

export const Tab = styled.div<{ type: number }>`
  width: 57px;
  height: 34px;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  margin-bottom: 10px;
  ${flexbox({ jc: 'center', ai: 'center' })}
  background-color: ${props =>
    props.type ? theme.colors.white : theme.colors.blue};
  border: 1px solid ${theme.colors.black};
`;

export const TabContainer = styled.nav`
  position: absolute;
  top: 1rem;
  right: -3.6rem;
`;
