import React from 'react';
import ToDo from '../ToDo';
import { ToDoConsumer } from '../../state/todo.context';
import './List.scss';

function List() {
  return (
    <div className="list">
      <ToDoConsumer>
        {([list]) => list.map(({ text, id }) => (
          <ToDo text={text} id={id} key={id} />
        ))}
      </ToDoConsumer>
    </div>
  );
}

export default List;
