import { useCallback, useState } from 'react';
import './App.css';
import Profile from './components/Profile';

const App = () => {
  const [name, setName] = useState('');
  const [nationality, setNationality] = useState('');

  const showNationality = useCallback(
    () => `私は${nationality}です`,[nationality]) ;
  return (
    <div>
      <h1>App</h1>
      <div className="app" >
        <label>名前</label>
        <input onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>国籍</label>
        <input onChange={(e) => setNationality(e.target.value)} />
      </div>

      <Profile showNationality={showNationality} />
    </div>
  );
};

export default App;
