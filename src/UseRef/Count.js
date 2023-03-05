import React, { useEffect, useRef, useState } from 'react';

// 몇 번 렌더링했나 알려면?
const Count = () => {
  const [count, setCount] = useState(1);
  const renderCount = useRef(0);
  //const [renderCount, setRenderCount] = useState(0);

  // 무한 렌더링
  // useEffect(() => {
  //   console.log('렌더링');
  //   setRenderCount(renderCount + 1);
  // });

  //변화를 감지하여 값에 변화가 생기지만 렌더링을 발생시키면 안되는 값을 다룰 때
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    console.log('렌더링 수:', renderCount.current);
  }, [count]);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>올려</button>
    </div>
  );
};

export default Count;
