import React from 'react';
import Todo from './Requirement';

const TodoList = ({ todos, setTodos, filteredTodos }) => {
    return (
        <div className="mt-6">
      <ul className="todo-list">
        {todos.map((todo) => (
            <Todo setTodos={setTodos} todos = {todos} key={todo.id} text={todo.text} todo = {todo}/> 
          ))} 
      </ul>
    </div>
    );
};

export default TodoList;