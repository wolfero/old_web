import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    initialColorMode: 'light',
    useSystemColorMode: false,
    colors: {
        black: {
            100: '#242526'
        },
        white: {
            100: '#f0f2f5'
        }
    },
    colorsTags: {
        black: 'black.100',
        white: 'white.100'
    }
});

export default theme;