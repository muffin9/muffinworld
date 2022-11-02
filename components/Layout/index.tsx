import React from 'react';

import ContentLayout from './Content';
import * as S from './Layout.style';

import Aside from '@/components/common/Aside';
import Header from '@/components/common/Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <S.Layout>
    <Header />
    <S.LayoutInner>
      <Aside />
      <ContentLayout>{children}</ContentLayout>
    </S.LayoutInner>
  </S.Layout>
);

export default Layout;
