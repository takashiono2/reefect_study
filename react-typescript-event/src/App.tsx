import React from 'react';
import './App.css';

function App() {
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log((event.target as HTMLButtonElement).disabled);
    console.log(event.currentTarget.disabled);
  };

  // const handleClick = (
  //   event: React.MouseEvent<HTMLButtonElement | HTMLDivElement, MouseEvent>
  // ) => {
  //   console.log(event);
  // };

  // const handleClick = (
  //   event: React.MouseEvent<HTMLElement, MouseEvent>
  // ) => {
  //   console.log(event);
  // };
  const handleDivClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    console.log(event);
  };

  return (
    <div className="App">
      <button onClick={handleClick}><span>Click</span></button>
      <div onClick={handleDivClick}>Click</div>
    </div>
  );
}

export default App;
