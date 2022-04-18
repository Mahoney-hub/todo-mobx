import React from 'react';
import {Checkbox, Paper} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import DeleteIcon from '@mui/icons-material/Delete';

export const TodoItem = () => {
    return (
        <li style={{marginBottom: '5px'}}>
            <Paper elevation={24} className={'between'}>
                <Checkbox/>
                Title
                <div>
                    <IconButton>
                        <SettingsIcon/>
                    </IconButton>
                    <IconButton>
                        <DeleteIcon/>
                    </IconButton>
                </div>
            </Paper>
        </li>
    );
};

