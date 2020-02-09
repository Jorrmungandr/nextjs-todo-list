import React, { useContext, useState } from 'react';
import ToDoContext from '../../state/todo.context';
import './Input.scss';

function Input() {
  const [todos, setTodos] = useContext(ToDoContext);
  const [value, setValue] = useState('');

  const handleAddToDo = () => {
    setTodos([...todos, {
      text: value,
      id: new Date().getTime(),
    }]);
    setValue('');
  };

  return (
    <div className="input">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        name="add-todo"
        id="add-todo"
      />
      <button type="button" onClick={handleAddToDo}>ADD</button>
    </div>
  );
}

export default Input;
