import { useMutation } from '@apollo/client';
import { css } from '@emotion/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import * as S from './Form.style';

import { POST_BOARD } from '@/queries/board';
import { flexbox } from '@/styles/mixin';
import { FormDataType } from 'type/Board';

const Form = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormDataType>({
    title: '',
    contents: '',
  });

  const [postBoard, { data, loading, error }] = useMutation(POST_BOARD, {
    variables: {
      writer: 'muffin',
      title: formData.title,
      contents: formData.contents,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) <p>Error :(</p>;
  if (data) {
    router.push('/diary');
  }

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, title: e.target.value });
  };

  const handleChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, contents: e.target.value });
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
    postBoard();
  };

  return (
    <S.Form>
      <S.FormWrapper>
        <S.Input
          id="title"
          type="text"
          placeholder="제목을 입력해주세요"
          onChange={handleChangeTitle}
          required
        />
        <S.Textarea id="contents" onChange={handleChangeContent} required />
      </S.FormWrapper>

      <div
        css={css`
          ${flexbox({ jc: 'center' })};
          gap: 2rem;
        `}
      >
        <S.Button type="submit" onClick={handleSubmit}>
          등록하기
        </S.Button>
        <Link href="/diary">
          <S.Button>취소하기</S.Button>
        </Link>
      </div>
    </S.Form>
  );
};

export default Form;
