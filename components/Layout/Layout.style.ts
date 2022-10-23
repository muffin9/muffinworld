import styled from '@emotion/styled';

import { flexbox } from '@/styles/mixin';

export const LayoutInner = styled.section`
  ${flexbox({})}
`;

export const Layout = styled.section`
  width: 50.5rem;
  height: 34rem;
  padding: 2rem;
  background: url('/InnerBackground.png');
  background-size: cover;
`;
