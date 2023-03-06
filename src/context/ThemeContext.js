import { createContext } from 'react';

// createContext의 초기값
// provider로 감싸지않을 경우 반환하는 값
export const ThemeContext = createContext('hi');
