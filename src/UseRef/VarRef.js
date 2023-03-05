import React, { useState, useRef } from 'react';

// State의 변화 -> 렌더링 -> 컴포넌트 내부 변수들 초기화
// Ref의 변화 -> 렌더링 X -> 변수들의 값이 유지됨
// State의 변화 -> 렌더링 -> 그래도 Ref의 값은 유지가 됨!!

// DOM요소의 접근 가능하다.
// 예) focus();
// useRef = document.querySelector 같은 느낌!

const VarRef = () => {
  const [renderer, setRenerer] = useState(0);

  // 변수와는 다르게 초기화되지 않음
  const countRef = useRef(0);

  // 버튼을 눌러 수를 변경해도 렌더링 될 때마다 0으로 초기화됨
  let countVar = 0;

  const doRendering = () => {
    setRenerer(renderer + 1);
  };

  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
    console.log('Ref: ', countRef.current);
  };

  const increaseCountVar = () => {
    countVar = countVar + 1;
    console.log('var: ' + countVar);
  };

  const printResults = () => {
    console.log(`ref: ${countRef.current}, var: ${countVar}`);
  };
  return (
    <div>
      <p>Ref: {countRef.current}</p>
      <p>Var : {countVar}</p>
      <button onClick={doRendering}>렌더!</button>
      <button onClick={increaseCountRef}>Ref 올려</button>
      <button onClick={increaseCountVar}>Var 올려</button>
      <button onClick={printResults}>Ref Var값 출력</button>
    </div>
  );
};

export default VarRef;
