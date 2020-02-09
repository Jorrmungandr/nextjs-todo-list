import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const ToDoContext = createContext([]);

const ToDoConsumer = ToDoContext.Consumer;


function ToDoProvider({ children }) {
  const [todos, setTodos] = useState([]);

  return (
    <ToDoContext.Provider value={[todos, setTodos]}>
      {children}
    </ToDoContext.Provider>
  );
}

ToDoProvider.propTypes = {
  children: PropTypes.element,
};

ToDoProvider.defaultProps = {
  children: <p />,
};

export { ToDoProvider, ToDoConsumer };

export default ToDoContext;
