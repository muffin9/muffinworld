import { useMutation } from '@apollo/client';
import { css } from '@emotion/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import * as S from './Form.style';

import { POST_BOARD, UPDATE_BOARD } from '@/queries/board';
import { flexbox } from '@/styles/mixin';
import { currentPath } from '@/utils/router';
import { FormDataType } from 'type/Board';

const Form = () => {
  const router = useRouter();
  const {
    pathname,
    query: { id, title, contents },
  } = router;

  let diaryId = 0;
  if (typeof id === 'string') {
    diaryId = +id;
  }

  const [formData, setFormData] = useState<FormDataType>({
    title: (title as string) || '',
    contents: (contents as string) || '',
  });

  // TODO create, update를 하나로 묶을 수 있는 hooks를 만들 필요가 있어보인다.
  const [postBoard, { data, loading: createLoading, error: createError }] =
    useMutation(POST_BOARD, {
      variables: {
        writer: 'muffin',
        title: formData.title,
        contents: formData.contents,
      },
    });

  const [
    updateBoard,
    { data: updateData, loading: updateLoading, error: updateError },
  ] = useMutation(UPDATE_BOARD, {
    variables: {
      number: diaryId,
      writer: 'muffin',
      title: formData.title,
      contents: formData.contents,
    },
  });

  if (createLoading || updateLoading) return <p>Loading...</p>;
  if (createError || updateError) return <p>Error :(</p>;

  if (data || updateData) {
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
    if (currentPath(pathname) === 'new') postBoard();
    else if (currentPath(pathname) === 'edit') updateBoard();
  };

  return (
    <S.Form>
      <S.FormWrapper>
        <S.Input
          id="title"
          type="text"
          placeholder="제목을 입력해주세요"
          onChange={handleChangeTitle}
          value={formData.title}
          required
        />
        <S.Textarea
          id="contents"
          onChange={handleChangeContent}
          value={formData.contents}
          required
        />
      </S.FormWrapper>

      <div
        css={css`
          ${flexbox({ jc: 'center' })};
          gap: 2rem;
        `}
      >
        <S.Button type="submit" onClick={handleSubmit}>
          {currentPath(pathname) === 'new' ? '등록하기' : '수정하기'}
        </S.Button>
        <Link href="/diary">
          <S.Button>취소하기</S.Button>
        </Link>
      </div>
    </S.Form>
  );
};

export default Form;
