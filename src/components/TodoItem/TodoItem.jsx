import React, {useContext} from 'react';
import { GrClose } from "react-icons/gr";
import withTodoItemStyle from "./TodoItemStyled";
import { TodoContext } from 'context/Todo.context';

const TodoItem = ({ className, task }) => {
    const { deleteTask, toggle } = useContext(TodoContext);
    const { name, completed, id } = task;

    return (
        <li className={className}>
            <input 
                className="toggle_completed" type="checkbox" 
                defaultChecked={completed}
                onClick={() => toggle(id)}
            />
            <span className={`task_labes ${completed?'completed':''}`}>{name}</span>
            <span className="delete_task" onClick={() => deleteTask(id)}><GrClose /></span>
        </li>
    )
}

export default withTodoItemStyle(TodoItem)
