import { Box, useColorModeValue } from "@chakra-ui/react";

const Main = ({ themes, children }) => {
    const [lightMode, darkMode] = themes;
    return (
        <Box
            bg={useColorModeValue(lightMode, darkMode)}
            color={useColorModeValue(darkMode, lightMode)}
        >
            <main>{children}</main>
        </Box>
    );
}

export default Main;