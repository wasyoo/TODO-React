import React, {useState, useContext} from 'react';
import withTodoListStyle from './TodoListStyled';
import TodoItem from 'components/TodoItem';
import { TodoContext } from 'context/Todo.context';

const FILTERCONSTANT = {
    all: 'All',
    active: 'Active',
    completed: 'Completed'
};

const TodoList = ({ className }) => {
    const [filter, setFilter] = useState('All');
    const { tasks } = useContext(TodoContext);

    const filterTask = (tasks) => {
        if (filter === 'All') return tasks;
        const filterbtn = filter === FILTERCONSTANT.active ? false : true;
        return tasks.filter(task => task.completed === filterbtn);
    }

    const countItemsLeft = () => tasks.filter(task => !task.completed).length;

    return (
        <div className={className}>
            <ul>
                {
                    filterTask(tasks).map(task => <TodoItem key={task.id} task={task}/>)
                }
            </ul>
            <div className="footer">
                <span className="task_count">
                    {`${countItemsLeft()} item${countItemsLeft() > 1 ? 's': ''} left`}
                </span>
                <ul>
                    <li 
                        className={filter === FILTERCONSTANT.all ? 'active' : ''} 
                        onClick={() => setFilter(FILTERCONSTANT.all)}
                    >
                        All
                    </li>
                    <li
                        className={filter === FILTERCONSTANT.active ? 'active' : ''}
                        onClick={() => setFilter(FILTERCONSTANT.active)}
                    >
                        Active
                    </li>
                    <li
                        className={filter === FILTERCONSTANT.completed ? 'active' : ''}
                        onClick={() => setFilter(FILTERCONSTANT.completed)}
                    >
                        Completed
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default withTodoListStyle(TodoList)
