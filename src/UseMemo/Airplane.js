import React, { useEffect, useMemo, useState } from 'react';

const Airplane = () => {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  const location = useMemo(() => {
    return {
      country: isKorea ? '한국' : '외국',
    };
  }, [isKorea]);

  // 참조형의 경우 렌더링 시 계속 주소값이 변함
  // {
  //   country: isKorea ? '한국' : '외국',
  // };

  useEffect(() => {
    console.log('useEffect 호출!');
  }, [location]);

  return (
    <div>
      <h2>하루에 몇끼 먹어요?</h2>
      <input
        type='number'
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <hr />
      <h2>어느 나라에 있어요?</h2>
      <p>나라 : {location.country}</p>
      <button onClick={() => setIsKorea(!isKorea)}>비행기 타자!</button>
    </div>
  );
};

export default Airplane;
