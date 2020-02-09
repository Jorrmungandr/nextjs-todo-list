import React, { useContext } from 'react';
import ToDoContext from '../../state/todo.context';
import './ToDo.scss';

function ToDo({ text, id }) {
  const [todos, setTodos] = useContext(ToDoContext);

  const handleDelete = () => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div id={id} className="todo">
      <p>{text}</p>
      <button type="button" onClick={handleDelete}>X</button>
    </div>
  );
}

export default ToDo;
