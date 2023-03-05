import React, { useState, useRef } from 'react';

// State의 변화 -> 렌더링 -> 컴포넌트 내부 변수들 초기화
// Ref의 변화 -> 렌더링 X -> 변수들의 값이 유지됨
// State의 변화 -> 렌더링 -> 그래도 Ref의 값은 유지가 됨!!

// DOM요소의 접근 가능하다.
// 예) focus();
// useRef = document.querySelector 같은 느낌!

const UseRef = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  console.log(countRef);

  console.log('렌더링');

  const increaseCountState = () => {
    setCount(count + 1);
  };

  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
    console.log('Ref: ', countRef.current);
  };

  return (
    <div>
      <p>State: {count}</p>
      <p>Ref : {countRef.current}</p>
      <button onClick={increaseCountState}>State 올려</button>
      <button onClick={increaseCountRef}>Ref 올려</button>
    </div>
  );
};

export default UseRef;
