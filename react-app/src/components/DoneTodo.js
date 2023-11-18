import { memo } from 'react';

const DoneTodo = ({ doneTodos }) => {
  console.log('Donetodo');
  return (
    <>
      <p>終了したTodo</p>
      <ul>
        {doneTodos.map((todo, index) => (
          <li key={index}>{todo.todo}</li>
        ))}
      </ul>
    </>
  );
};

export default memo(DoneTodo);