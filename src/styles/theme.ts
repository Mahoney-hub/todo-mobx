import {createTheme} from '@mui/material/styles';
import {blueGrey, red} from '@mui/material/colors';

export const theme = createTheme({
    palette: {
        primary: {
            main: blueGrey['A700'],
        },
        secondary: {
            main: blueGrey[900],
        },
        error: {
            main: red['A700'],
        },
    },
});