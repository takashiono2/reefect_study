import { memo, useCallback, useState } from 'react';

const Child = memo(({ setIsTextChanged }) => {
  console.log('再描写');
  return <button onClick={setIsTextChanged}>Toggle</button>;
});

function App() {
  const [isTextChanged, setIsTextChanged] = useToggle();
  const [name, setName] = useState('');

  return (
    <div>
      <h1>useToggle</h1>
      <div>
        <label>名前</label> <input onChange={(e) => setName(e.target.value)} />
      </div>
      <div>{isTextChanged ? 'Yes' : 'No'}</div>
      <Child setIsTextChanged={setIsTextChanged} />
    </div>
  );
}

// Hook
// Parameter is the boolean, with default "false" value
const useToggle = (initialState = false) => {
  // Initialize the state
  const [state, setState] = useState(initialState);

  // Define and memorize toggler function in case we pass down the comopnent,
  // This function change the boolean value to it's opposite value
  const toggle = useCallback(() => setState((state) => !state), []);

  return [state, toggle];
};

export default App;
