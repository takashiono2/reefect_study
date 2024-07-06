import {memo} from 'react';
import TodoList from './TodoList'

function Todo({ todos,completeTodo }) {
  console.log('Todo');
  return (
    <ul>
      {
        todos.map((todo, index) => (
          <TodoList
          todo={todo}
          key={index}
          index={index}
          completeTodo={completeTodo}
          />
        ))
      }
    </ul>
  )

};

export default memo(Todo);
