import styled from '@emotion/styled';

import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';

export const Input = styled.input`
  height: 1.5rem;
  padding: 0 1rem;
  border: 1px solid ${theme.colors.lightGray};
  border-radius: 3px;
  margin-bottom: 1rem;
`;

export const Button = styled.button`
  width: 4.375rem;
  height: 1.5rem;
  border: 1px solid ${theme.colors.black};
  border-radius: 3px;
  background-color: ${theme.colors.lightSilver};
  color: ${theme.colors.white};
  cursor: pointer;
  &:hover {
    background-color: ${theme.colors.gray};
  }
`;

export const Textarea = styled.textarea`
  height: 248px;
  border: 1px solid ${theme.colors.lightGray};
  padding: 1rem;
  resize: none;
`;

export const Form = styled.form`
  margin-bottom: 1.5rem;
  height: 19.75rem;
  padding: 1rem;
  border: 1px solid ${theme.colors.lightGray};
`;

export const FormWrapper = styled.section`
  ${flexbox({ dir: 'column' })}
  margin-bottom: 1.5rem;
`;
