import styled from 'styled-components';

export default (Component) => styled(Component)`
    height: 50px;
    background: #FFFFFF;
    border: 1px solid #F5F5F5;
    border-left: none;
    border-left: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:hover > .delete_task {
        visibility: visible;
    }
    .toggle_completed {
        flex: 1
    }
    .task_labes {
        flex: 6;
        font-size: 18px;
        &.completed {
            text-decoration: line-through;
            color: #808080;
        }
    }
    .delete_task {
        padding: 10px;
        visibility: hidden;
        svg {
            cursor: pointer;
        }
    }
`;