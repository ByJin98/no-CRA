import { useState } from 'react';

export function useInput(initalValue, submitAction) {
  const [data, setData] = useState(initalValue);

  const handleChange = (e) => {
    setData(e.target.value);
  };

  const handleSubmit = () => {
    submitAction(data);
    setData('');
  };

  return [data, handleChange, handleSubmit];
}
