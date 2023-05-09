import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Todo = ({text, todo, setTodos, todos}) => {

    const deleteHandler = () => {
        console.log(todo);
        setTodos(todos.filter((el) => el.id !== todo.id))
    }

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }

    return (
        <div className="flex items-center my-2">
        <li className='text-[#9E9CA0] text-md'>{text}</li>
        <button className="trash-btn" onClick={deleteHandler}>
            <FaTimes className='text-[#F50404] mx-3'/>
        </button>
      </div>
    )
}

export default Todo;