import React from 'react';

import Tabs from '../Tabs';

import * as S from './Content.style';

interface LayoutProps {
  children: React.ReactNode;
}

const ContentLayout = ({ children }: LayoutProps) => (
  <S.ContentLayout>
    {children}
    <Tabs />
  </S.ContentLayout>
);

export default ContentLayout;
