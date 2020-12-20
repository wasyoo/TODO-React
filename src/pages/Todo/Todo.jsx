import React from 'react';
import { TodoProvider } from 'context/Todo.context';
import NewTodo from 'components/NewTodo';
import TodoList from 'components/TodoList';

function Todo() {
    return (
        <TodoProvider>
            <h1>TODO LIST</h1>
            <NewTodo />
            <TodoList />
        </TodoProvider> 
    )
}

export default Todo
