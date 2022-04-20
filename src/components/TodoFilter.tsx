import React from 'react';
import {Button, ButtonGroup} from '@mui/material';
import {FilterValue} from './Todo';

type TodoFilterType = {
    setFilter: (value: FilterValue) => void
}

export const TodoFilter = ({setFilter}:TodoFilterType) => {
    return (
        <ButtonGroup variant={'contained'} fullWidth>
            <Button onClick={()=>setFilter('ALL')}>ALL</Button>
            <Button onClick={()=>setFilter('ACTIVE')}>ACTIVE</Button>
            <Button onClick={()=>setFilter('COMPLETED')}>COMPLETED</Button>
        </ButtonGroup>
    );
};

