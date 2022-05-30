import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    initialColorMode: 'light',
    useSystemColorMode: false,
    colors: {
        black: {
            333: '#333'
        },
        white: {
            333: '#f6f6f6'
        }
    },
});

export default theme;