import React, { useReducer, useState } from 'react';

// Dispatch -> action -> reducer(변경)

const ACTION_TYPES = {
  DEPOSIT: 'DEPOSIT',
  WITHDRAW: 'WITHDRAW',
};

// reducer (업데이트 역할)
// dispatch (reducer에게 요구)
// action (요구의 내용)
const reducer = (state, action) => {
  console.log('리듀서가 일을 한다~', state, action);
  switch (action.type) {
    case ACTION_TYPES.DEPOSIT:
      return state + action.payload;
    case ACTION_TYPES.WITHDRAW:
      return state - action.payload;
    default:
      return state;
  }
};

const Index = () => {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h2>useReducer 은행</h2>
      <p>잔고: {money}원</p>
      <input
        type='number'
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        step='1000'
      />
      <button
        onClick={() => {
          dispatch({ type: ACTION_TYPES.DEPOSIT, payload: parseInt(number) });
        }}
      >
        예금
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTION_TYPES.WITHDRAW, payload: parseInt(number) });
        }}
      >
        출금
      </button>
    </div>
  );
};

export default Index;
