import React from 'react';
import {Checkbox, Paper} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import {BasicModal} from './BasicModal';
import mobx from '../store/todo';

type TodoItemType = {
    id: string
    title: string
    completed: boolean
}

export const TodoItem = ({id, title, completed}: TodoItemType) => {
    return (
        <li style={{marginBottom: '5px'}}>
            <Paper elevation={24} className={'between'}>
                <Checkbox checked={completed} onChange={() => mobx.changeTaskCompleted(id)}/>
                <span className={ completed ? 'completed' : '' }>
                    {title}
                </span>
                <div style={{display: 'flex'}}>
                    <BasicModal id={id} />
                    <IconButton onClick={() => mobx.deleteTask(id)}>
                        <DeleteIcon/>
                    </IconButton>
                </div>
            </Paper>
        </li>
    );
};

