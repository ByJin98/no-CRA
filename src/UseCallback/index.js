import React, { useCallback, useState, useEffect } from 'react';

// useMemo와의 차이점?
// useMemo = 값을 메모이제이션
// useCallback = 함수를 메모이제이션

const Index = () => {
  const [number, setNumber] = useState(0);
  const [toggle, setToggle] = useState(true);

  const someFunction = useCallback(() => {
    console.log(`someFunc : ${number}`);
    return;
  }, [number]);

  useEffect(() => {
    console.log('someFunction함수 할당~');
  }, [someFunction]);

  return (
    <div>
      <input
        type='number'
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
      <br />
      <button onClick={someFunction}>Call someFunc</button>
    </div>
  );
};

export default Index;
