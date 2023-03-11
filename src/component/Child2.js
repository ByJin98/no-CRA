import React, { memo } from 'react';

const Child2 = ({ name, tellMe }) => {
  console.log('자녀 렌더링~');
  return (
    <div style={{ border: '2px solid powderblue', padding: '10px' }}>
      <h3>자녀</h3>
      <p>성 : {name.lastName}</p>
      <p>이름 : {name.firstName}</p>
      <button onClick={tellMe}>눌러봐요</button>
    </div>
  );
};

export default memo(Child2);
