import styled from '@emotion/styled';

import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';

export const ProfileImage = styled.img`
  width: 8.875rem;
  height: 7.6875rem;
  background: url('/CyworldProfile.jpeg');
`;

export const ProfileContent = styled.div``;

export const Horizontal = styled.div`
  width: 9.25rem;
  margin: 0.875rem 0;
  border: 1px dashed ${theme.colors.black};
`;

export const RowBox = styled.div`
  ${flexbox({})};
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const Feelings = styled.div`
  margin-top: auto;
`;

export const FeelingsLabel = styled.label``;

export const FeelingSelectBox = styled.select`
  width: 100%;
  background-color: ${theme.colors.gray};
  color: ${theme.colors.black};
`;

export const FeelingOption = styled.option``;

export const AsideWrapper = styled.aside`
  width: 13rem;
  height: 27.1875rem;
  ${flexbox({ dir: 'column' })}
  padding: 2rem;
  border: 1px solid ${theme.colors.black};
  border-radius: 10px;
  background-color: ${theme.colors.white};
`;
