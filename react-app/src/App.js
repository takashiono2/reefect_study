import React from 'react';
import axios from "axios";

const { useState,useEffect } = React;

const App = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      .catch(error => console.log(error))
  }, [])

  const handleChange = (e) => {
    setName(e.target.value);
  };
//postする,[...users, response.data]を使う
  const createNewUser = () => {
    axios.post('https://jsonplaceholder.typicode.com/users', {
        name: name,
      })
      .then(response=>setUsers([...users,response.data]))
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteUser = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/user/${id}`)
      .then((response) => {
        console.log(response);
        setUsers(users.filter((user) => user.id !== id));
      })
      .catch((error) => {
        console.log('エラーが発生');
        console.log(error.message);
        console.log(error.response.status);
        console.log(error.response.data);
        console.log(error.response);
      });
  };

  const modifyUser = (id) => {
    axios.patch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      name: 'John Doe'
    })
    .then(response => {
      let updateUsers = users.map(user => {
        if(user.id === response.data.id){
          return response.data
        }else{
          return user;
        }
      })
      setUsers(updateUsers)
    })
    .catch(error => console.log(error))
  }
  return (
    <div>
      <input value={name} onChange={handleChange} /><br />
      <button onClick={createNewUser}>作成</button>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name}:
            <button onClick={() => deleteUser(user.id)}>削除</button>
            <button onClick={() => modifyUser(user.id)}>更新</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;