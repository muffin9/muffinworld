import styled from '@emotion/styled';

export const Divider = styled.div<{
  width: number;
  color: string;
  borderStyle: string;
}>`
  width: ${props => props.width}rem;
  border-top: 1px solid ${props => props.color};
  border-style: ${props => props.borderStyle};
`;
