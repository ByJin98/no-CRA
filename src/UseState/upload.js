import React, { useState } from 'react';

const 무거운작업 = () => {
  console.log('무거운작업실행중');
  return ['이이', 'ㅇ오오'];
};
const Upload = () => {
  // 아래와 같은 작업은 무거운작업실행중 콘솔을 계속 찍음
  // const [무거운거, set무거운거] = useState(무거운작업());
  // 문제를 해결하려면 () => 를 사용!
  // const [무거운거, set무거운거] = useState(() => 무거운작업());

  const [names, setNames] = useState(['홍길동', '김민수']);
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const onClickUpload = () => {
    setNames((prev) => [input, ...prev]);
    setInput('');
  };
  return (
    <div>
      <input type='text' value={input} onChange={handleInputChange} />
      <button onClick={onClickUpload}>업로드</button>
      {names.map((name, idx) => {
        return <p key={idx}>{name}</p>;
      })}
    </div>
  );
};

export default Upload;
