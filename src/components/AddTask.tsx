import React, {KeyboardEvent, useState} from 'react';
import {TextField} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import mobx from '../store/todo';

export const AddTask = () => {
    const [title, setTitle] = useState<string>('')
    const handlerClick = () => {
        if (title.trim().length) {
            mobx.addTask(title)
            setTitle('')
        }
    }
    const handlerKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') handlerClick()
    }
    return (
        <div className={'w400 center'}>
            <TextField variant={'standard'}
                       size={'small'}
                       placeholder={'add task...'}
                       fullWidth
                       value={title}
                       onChange={(e)=>setTitle(e.currentTarget.value)}
                       onKeyPress={handlerKeyPress}
            />
            <IconButton color="primary" onClick={handlerClick}>
                <AddIcon/>
            </IconButton>
        </div>
    );
};

