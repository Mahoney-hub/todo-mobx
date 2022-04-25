import React from 'react';
import {Paper} from '@mui/material';
import {TodoList} from './TodoList';
import {TodoFilter} from './TodoFilter';
import {AddTask} from './AddTask';
import mobx from '../store/todo';
import {observer} from 'mobx-react-lite';

export type TodosType = {
    id: string
    title: string
    completed: boolean
}

export type FilterValue = 'ALL' | 'ACTIVE' | 'COMPLETED'

export const Todo = observer(() => {
    const getFilteredTodos = (filter: FilterValue) => {
        switch (filter) {
            case 'ACTIVE':
                return mobx.todoMobx.filter(task => !task.completed)
            case 'COMPLETED':
                return mobx.todoMobx.filter(task => task.completed)
            default:
                return mobx.todoMobx
        }
    }
    const filteredTodos = getFilteredTodos(mobx.filterMobx)

    return (
        <Paper className={'wrapper'} elevation={10}>
            <AddTask/>
            <TodoList todos={filteredTodos}/>
            <TodoFilter/>
        </Paper>
    );
})

