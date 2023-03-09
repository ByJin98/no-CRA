import React, { useReducer, useState } from 'react';
import Student from '../component/Student';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_STUDENT':
      const name = action.payload.name;
      const newStudent = {
        id: Date.now(),
        name,
        isHere: false,
      };
      return {
        count: state.count + 1,
        students: [...state.students, newStudent],
      };
    case 'DELETE_STUDENT':
      return {
        count: state.count - 1,
        students: state.students.filter(
          (student) => student.id !== action.payload.id,
        ),
      };
    case 'MARK_STUDENT':
      return {
        count: state.count,
        students: state.students.map((student) => {
          if (student.id === action.payload.id) {
            return { ...student, isHere: !student.isHere };
          }
          return student;
        }),
      };
    default:
      return state;
  }
};

const initialState = {
  count: 0,
  students: [],
};

const Students = () => {
  const [name, setName] = useState('');
  const [studentsInfo, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>출석부</h2>
      <p>총 학생 수 : {studentsInfo.count}</p>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='이름을 입력해주세요!'
      />
      <button
        onClick={() => dispatch({ type: 'ADD_STUDENT', payload: { name } })}
      >
        추가
      </button>
      {studentsInfo.students.map((student) => {
        return (
          <Student
            key={student.id}
            name={student.name}
            dispatch={dispatch}
            id={student.id}
            isHere={student.isHere}
          />
        );
      })}
    </div>
  );
};

export default Students;
