import {memo} from 'react';
import TodoList from './TodoList'

function Todo({todos, completeTodo}) {
  console.log('Todo')
  return (
    <ul>
      {todos.map((todo,index) =>
        <TodoList
          todo={todo}
          completeTodo={completeTodo}
          index={index}
          key={index}
        />
      )}
    </ul>
  )
}

export default memo(Todo)