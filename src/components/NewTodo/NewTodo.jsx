import React, {useState, useContext} from 'react';
import withNewTodoStyle from "./NewTodoStyled";
import { TodoContext } from 'context/Todo.context';

const NewTodo = ({ className }) => {
    const [newTask, setNewTask] = useState('')
    const { AddTask } = useContext(TodoContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        AddTask(newTask);
        setNewTask('');
    }
    return (
        <div className={className}>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Add task"
                />
            </form>
        </div>
    )
};

export default withNewTodoStyle(NewTodo);