import React, { useState } from 'react';
import { useInput } from '../hooks/useInput';

function displayMessage(message) {
  alert(message);
}

const Input = () => {
  const [ddd, handleChange, handleSubmit] = useInput('', displayMessage);

  return (
    <div>
      <h1>useInput</h1>
      <input value={ddd} onChange={handleChange} />
      <button onClick={handleSubmit}>확인</button>
    </div>
  );
};

export default Input;
