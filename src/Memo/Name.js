import React, { useCallback, useMemo, useState } from 'react';
import Child2 from '../component/Child2';

const Name = () => {
  const [parentAge, setParentAge] = useState(0);

  const incrementParentAge = () => {
    setParentAge(parentAge + 1);
  };

  console.log('부모컴포넌트 렌더링');

  const name = useMemo(
    () => ({
      lastName: '홍',
      firstName: '길동',
    }),
    [],
  );

  const tellMe = useCallback(() => {
    console.log('길동아~~ 안녕~');
  }, []);

  return (
    <div style={{ border: '2px solid navy', padding: '10px' }}>
      <h1>부모</h1>
      <p>age : {parentAge}</p>
      <button onClick={incrementParentAge}>부모 나이 증가</button>
      <Child2 name={name} tellMe={tellMe} />
    </div>
  );
};

export default Name;
