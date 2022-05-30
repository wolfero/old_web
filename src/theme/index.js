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
    colorsTags: {
        black: 'black.333',
        white: 'white.333'
    }
});

export default theme;