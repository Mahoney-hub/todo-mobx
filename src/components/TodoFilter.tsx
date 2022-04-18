import React from 'react';
import {Button, ButtonGroup} from '@mui/material';

export const TodoFilter = () => {
    return (
        <ButtonGroup variant={'contained'} fullWidth>
            <Button>ALL</Button>
            <Button>ACTIVE</Button>
            <Button>COMPLETED</Button>
        </ButtonGroup>
    );
};

