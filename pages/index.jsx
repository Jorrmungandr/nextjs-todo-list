import React from 'react';
import { ToDoProvider } from './state/todo.context';
import { List, Input } from './components';

function HomePage() {
  return (
    <ToDoProvider>
      <section className="todo-list">
        <Input />
        <List />
      </section>
    </ToDoProvider>
  );
}

export default HomePage;
