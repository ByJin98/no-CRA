import React, { useMemo, useState } from 'react';

const hardCalculate = (number) => {
  console.log('어려운 계산!');
  for (let i = 0; i < 99999999; i++) {} //생각하는 시간
  return number + 10000;
};

const easyCalculate = (number) => {
  console.log('짱 쉬운 계산!');
  return number + 1;
};

// useMemo는 콜백과 배열을 인자로 받음
// 1. () => : 실행할 함수
// 2. [] : 해당 의존배열안에 값이 변경되면 위의 1번을 재실행
const Index = () => {
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);

  // const hardSum = hardCalculate(hardNumber);
  const hardSum = useMemo(() => {
    return hardCalculate(hardNumber);
  }, [hardNumber]);

  const easySum = useMemo(() => {
    return easyCalculate(easyNumber);
  }, [easyNumber]);

  return (
    <div>
      <h3>어려운 계산기</h3>
      <input
        type='number'
        value={hardNumber}
        onChange={(e) => setHardNumber(parseInt(e.target.value, 10))}
      />
      <span>+ 10000 = {hardSum}</span>

      <h3>쉬운 계산기</h3>
      <input
        type='number'
        value={easyNumber}
        onChange={(e) => setEasyNumber(parseInt(e.target.value, 10))}
      />
      <span>+ 1 = {easySum}</span>
    </div>
  );
};

export default Index;
