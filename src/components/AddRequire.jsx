import React from 'react';
import { BsPlus } from 'react-icons/bs';

const AddRequire = ({ setInputText, todos, setTodos, inputText }) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault();
        if (inputText === "") {
            return;
        }
        setTodos([...todos, { text: inputText, completed: false, id: Math.random() * 1000 }]);
        setInputText("");
    }

    return (
        <div className='flex items-center'>
            <input type="text" name="headline" id="headline" className='w-full py-3 rounded-tl-lg rounded-bl-lg focus:outline-primary' value={inputText} onChange={inputTextHandler} />
            <button className="flex bg-primary items-center text-white px-3 py-3" onClick={submitHandler} type="submit">
                <BsPlus className='text-white mx-1' /> Add
            </button>
        </div>
    )
}

export default AddRequire;
