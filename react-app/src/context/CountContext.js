import { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const CountContext = createContext();

export function useCountContext() {
  return useContext(CountContext);
}

export function CountProvider({ children }) {
  const [count, setCount] = useLocalStorage('count', 100);

  const value = {
    count,
    setCount,
  };

  return (
    <CountContext.Provider value={value}>{children}</CountContext.Provider>
  );
}