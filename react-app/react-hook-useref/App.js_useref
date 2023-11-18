import { useRef,useState } from 'react';
import './App.css';

function App() {
  const emailRef = useRef(null);
  // const passwordRef = useRef(null);
  const[password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`emai:${emailRef.current.value}, password:${password}`);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="App">
      <h1>ログイン</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" ref={emailRef} />
          {emailRef.current && <div>{emailRef.current.value}</div>}
        </div>
        <div>
          <label htmlFor="password">パスワード</label>
          <input
          id="password"
          value={password}
          onChange={handleChangePassword}
          type="password" />
          <div>{password}</div>
        </div>
        <div>
          <button>ログイン</button>
        </div>
      </form>
    </div>
  );
}

export default App;