import React from 'react';
import {TodoItem} from './TodoItem';
import {TodosType} from './Todo';

type TodoListType = {
    todos: TodosType[]
    deleteTask: (id:string) => void
    changeTaskCompleted: (id: string) => void
    changeTaskTitle: (id: string, newTitle: string) => void
}

export const TodoList = ({todos, deleteTask, changeTaskCompleted, changeTaskTitle}: TodoListType) => {
    return (
        <ul className={'list'}>
            {todos.map(todo => <TodoItem key={todo.id}
                                         {...todo}
                                         deleteTask={deleteTask}
                                         changeTaskCompleted={changeTaskCompleted}
                                         changeTaskTitle={changeTaskTitle}
            />)}
        </ul>
    );
};

