import React, { useEffect, useRef } from 'react';

const InputRef = () => {
  const inputRef = useRef('zzz');

  useEffect(() => {
    // console.log(inputRef);
    // 시작하자마자 포커스가 가도록
    inputRef.current.focus();
  }, []);

  const login = () => {
    alert(`환영합니다! ${inputRef.current.value}`);
  };

  return (
    <div>
      <input type='text' ref={inputRef} placeholder='username' />
      <button onClick={login}>로그인</button>
    </div>
  );
};

export default InputRef;
