import Image from 'next/image';
import React, { useState } from 'react';

import Card from '../Card';

import * as S from './EndToEnd.style';

import Text from '@/components/common/Text';

const EndToEnd = () => {
  const [prevWord, setPrevWord] = useState('코드캠프');
  const [word, setWord] = useState('');
  const [answer, setAnswer] = useState('결과!');

  const handleChangeWord = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value);
  };

  const calculateAnswer = () => {
    if (word[0] === prevWord[prevWord.length - 1]) {
      setPrevWord(word);
      setWord('');
      return setAnswer('정답!');
    }
    return setAnswer('오답입니다!');
  };

  return (
    <Card>
      <Image src="/endToend.png" alt="EndToEnd Image" width={40} height={20} />
      <Text text="끝말잇기" size="xSmall" />
      <Text text={`제시어 : ${prevWord}`} size="xSmall" />
      <div>
        <S.WordInput
          type="text"
          value={word}
          onChange={handleChangeWord}
          placeholder="단어를 입력하세요."
        />
        <S.CheckButton type="button" onClick={calculateAnswer}>
          입력
        </S.CheckButton>
      </div>
      <Text text={answer} size="xSmall" />
    </Card>
  );
};

export default EndToEnd;
