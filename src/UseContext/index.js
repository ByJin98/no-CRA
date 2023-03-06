import React, { useState } from 'react';
import Page from './components/Page';
import './index.css';
import { ThemeContext } from '../context/ThemeContext';
import { UserContext } from '../context/UserContext';

const Index = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    //ThemeContext가 감싸는 모든 하위컴포넌트는 value로 넣은 값에 접근가능
    <UserContext.Provider value={'사용자'}>
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <Page />
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
};

export default Index;
