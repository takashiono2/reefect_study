import { useState, useEffect, useRef } from 'react';

function App() {
  const [count, setCount] = useState(99999);
  const divElement = useRef();

  useEffect(() => {
    setCount(0);
    const element = divElement.current;
    element.style.backgroundColor = 'red';
  }, []);
  return (
    <div ref={divElement} style={{ backgroundColor: 'blue' }}>
      {count}
    </div>
  );
}
export default App;