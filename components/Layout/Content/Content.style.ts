import styled from '@emotion/styled';

import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';

export const Tab = styled.div`
  width: 57px;
  height: 34px;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  margin-bottom: 10px;
  ${flexbox({ jc: 'center', ai: 'center' })}
  background-color: ${theme.colors.blue};
  border: 1px solid ${theme.colors.black};
`;

export const TabContainer = styled.nav`
  position: absolute;
  top: 1rem;
  right: -3.6rem;
`;

export const ContentLayout = styled.section`
  width: 32.25rem;
  height: 27.1875rem;
  padding: 2rem;
  margin-left: 3px;
  border-radius: 10px;
  position: relative;
  border: 1px solid ${theme.colors.black};
  background-color: ${theme.colors.white};
`;
