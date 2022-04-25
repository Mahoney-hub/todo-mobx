import React from 'react';
import {TodoItem} from './TodoItem';
import {TodosType} from './Todo';

type TodoListType = {
    todos: TodosType[]
}

export const TodoList = ({todos}: TodoListType) => {
    return (
        <ul className={'list'}>
            {todos.map(todo => <TodoItem key={todo.id} {...todo} />)}
        </ul>
    );
};

