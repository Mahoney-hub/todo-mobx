import React from 'react';
import {Heading} from './components/Heading';
import {Todo} from './components/Todo';
import {ThemeProvider} from '@mui/material';
import {theme} from './styles/theme';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Heading/>
            <Todo/>
        </ThemeProvider>
    );
};

export default App;