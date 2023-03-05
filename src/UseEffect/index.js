import React from 'react';
import { useState, useEffect } from 'react';

const UseEffect = () => {
  const [count, setCount] = useState(1);
  const [name, setName] = useState('');

  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  // []가 없을때는 렌더링 될때마다 실행됨
  // []만 있을때는 초기렌더링 시 딱 한번만 실행됨
  // [의존값]이 있을 때는 초기렌더링시, 의존값이 변경될때마다 실행됨
  useEffect(() => {
    console.log('그냥 뭘 하던 렌더링됨');
  });

  useEffect(() => {
    console.log('맨 처음만 실행함');
  }, []);

  useEffect(() => {
    console.log('count 변경감지');
  }, [count]);

  useEffect(() => {
    console.log('name 변경감지');
  }, [name]);

  return (
    <div>
      <button onClick={handleCountUpdate}>업데이트</button>
      <span>count : {count}</span>
      <input type='text' value={name} onChange={handleInputChange} />
      <span>name : {name}</span>
    </div>
  );
};

export default UseEffect;
