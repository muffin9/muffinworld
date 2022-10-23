import React from 'react';

import * as S from './Content.style';

interface LayoutProps {
  children: React.ReactNode;
}

const ContentLayout = ({ children }: LayoutProps) => (
  <S.ContentLayout>{children}</S.ContentLayout>
);

export default ContentLayout;
