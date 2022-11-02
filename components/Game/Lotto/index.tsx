import Image from 'next/image';
import { SetStateAction, useState } from 'react';

import Card from '../Card';

import * as S from './Lotto.style';

import Text from '@/components/common/Text';

const Lotto = () => {
  const [lottoNumbers, setLottoNumbers] = useState<number[]>([
    3, 5, 10, 24, 30, 34,
  ]);
  const handleShuffle = () => {
    const lotto: SetStateAction<number[]> = [];
    while (lotto.length !== 6) {
      const num = Math.floor(Math.random() * 44) + 1;
      if (!lotto.includes(num)) lotto.push(num);
    }
    setLottoNumbers(lotto);
  };

  return (
    <Card>
      <Image src="/Lotto.png" alt="Lotto Image" width={34} height={36} />
      <Text text="Lotto" size="xSmall" />
      <Text text="버튼을 누르세요" size="xSmall" />
      <S.LottoNumbers>
        {lottoNumbers.map((num: number) => {
          return <Text key={num} text={`${num}`} size="xSmall" />;
        })}
      </S.LottoNumbers>
      <S.LottoShuffleButton onClick={handleShuffle}>
        Shuffle
      </S.LottoShuffleButton>
    </Card>
  );
};

export default Lotto;
