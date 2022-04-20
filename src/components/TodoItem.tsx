import React from 'react';
import {Checkbox, Paper} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import DeleteIcon from '@mui/icons-material/Delete';
import {BasicModal} from './BasicModal';

type TodoItemType = {
    id: string
    title: string
    completed: boolean
    deleteTask: (id: string) => void
    changeTaskCompleted: (id: string) => void
    changeTaskTitle: (id: string, newTitle: string) => void
}

export const TodoItem = ({id, title, completed, deleteTask, changeTaskCompleted, changeTaskTitle}: TodoItemType) => {
    const changeTaskTitleHandler = (title:string) => {
        changeTaskTitle(id,title)
    }
    return (
        <li style={{marginBottom: '5px'}}>
            <Paper elevation={24} className={'between'}>
                <Checkbox checked={completed} onChange={() => changeTaskCompleted(id)}/>
                <span className={ completed ? 'completed' : '' }>
                    {title}
                </span>
                <div style={{display: 'flex'}}>
                    <BasicModal changeTaskTitle={changeTaskTitleHandler} />
                    <IconButton onClick={() => deleteTask(id)}>
                        <DeleteIcon/>
                    </IconButton>
                </div>
            </Paper>
        </li>
    );
};

