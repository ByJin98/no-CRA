import React, { useState } from 'react';
import Timer from '../component/Timer';

const CleanUP = () => {
  const [showTimer, setShowTimer] = useState(false);
  return (
    <div>
      {showTimer && <Timer />}
      <button onClick={() => setShowTimer((prev) => !prev)}>토글 타이머</button>
    </div>
  );
};

export default CleanUP;
