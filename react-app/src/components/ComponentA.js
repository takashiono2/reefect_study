import React from 'react';
import { useCountContext } from '../context/CountContext';
import ComponentB from './ComponentB';

const ComponentA = () => {
  const { count } = useCountContext;
  return (
    <div>
      <p>Componet A</p>
      <ComponentB />
      <p>{count}</p>
    </div>
  );
};

export default ComponentA;