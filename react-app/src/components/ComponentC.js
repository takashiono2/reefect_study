import { useAnotherCountContext } from '../context/AnotherCountContext';
import { useCountContext } from '../context/CountContext';

const ComponentC = () => {
  const { count, setCount } = useCountContext();
  const { anotherCount, setAnotherCount } = useAnotherCountContext();

  return (
    <div>
      <p>Componet C</p>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <p>another count: {anotherCount}</p>
      <button onClick={() => setAnotherCount(anotherCount + 1)}>+</button>
    </div>
  );
};

export default ComponentC;