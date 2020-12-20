import React, { useState } from 'react';

export const TodoContext = React.createContext();

const initialState = [
  {
    id: 1,
    name: "task 1",
    completed: false, 
  },
  {
    id: 2,
    name: "task 2",
    completed: true, 
  },
];

export const TodoProvider = ({ children }) => {
  const [tasks, setTasks] = useState(initialState);

  const AddTask = (newtask) => {
    setTasks(state => [
      {
        id: tasks.length+1,
        name: newtask,
        completed: false,
      },
      ...state
    ]);
  }

  const deleteTask = (id) => {
    setTasks((state) => state.filter(task => task.id !== id));
  }

  const toggle = (id) => {
    const newTasks = tasks.map(task => {
      if(task.id === id) {
        task.completed = !task.completed
      }
      return task
    })
    setTasks(newTasks)
  }

  return (
    <TodoContext.Provider value={{ tasks, AddTask, deleteTask, toggle }}>
      {children}
    </TodoContext.Provider>
  );
};