import { createContext, useState, useContext } from 'react';

const AnotherCountContext = createContext();

export function useAnotherCountContext() {
  return useContext(AnotherCountContext);
}

export function AnotherCountProvider({ children }) {
  const [anotherCount, setAnotherCount] = useState(200);

  const value = {
    anotherCount,
    setAnotherCount,
  };

  return (
    <AnotherCountContext.Provider value={value}>
      {children}
    </AnotherCountContext.Provider>
  );
}