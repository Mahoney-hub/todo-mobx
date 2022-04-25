import React from 'react';
import {Button, ButtonGroup} from '@mui/material';
import styled from 'styled-components';
import mobx from '../store/todo';

export const TodoFilter = () => {
    return (
        <ButtonGroup variant={'contained'} fullWidth>
            <ButtonStyled onClick={()=>mobx.changeFilter('ALL')}>ALL</ButtonStyled>
            <ButtonStyled onClick={()=>mobx.changeFilter('ACTIVE')}>ACTIVE</ButtonStyled>
            <ButtonStyled onClick={()=>mobx.changeFilter('COMPLETED')}>COMPLETED</ButtonStyled>
        </ButtonGroup>
    );
};

const ButtonStyled = styled(Button)`
&& {
  font-family: cursive;
  font-weight: 400;
}
`

