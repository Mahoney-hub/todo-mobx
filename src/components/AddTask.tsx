import React from 'react';
import {TextField} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

export const AddTask = () => {
    return (
        <div className={'w400 center'}>
            <TextField variant={'standard'}
                       size={'small'}
                       placeholder={'add task...'}
                       fullWidth
            />
            <IconButton color="primary">
                <AddIcon/>
            </IconButton>
        </div>
    );
};

