import React from 'react';
import {Paper} from '@mui/material';
import {TodoList} from './TodoList';
import {TodoFilter} from './TodoFilter';
import {AddTask} from './AddTask';

export const Todo = () => {
    return (
        <Paper className={'wrapper'} elevation={10}>
            <AddTask/>
            <TodoList/>
            <TodoFilter/>
        </Paper>
    );
};

