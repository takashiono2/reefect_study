import React from 'react';
import ComponentC from './ComponentC';
import { useCountContext } from '../context/CountContext';

const ComponentB = () => {
  const { count, setCount } = useCountContext();
  return (
    <div>
      <p>Componet B</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <ComponentC />
    </div>
  );
};

export default ComponentB;