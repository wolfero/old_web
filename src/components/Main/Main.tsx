import { Box, useColorModeValue } from "@chakra-ui/react";

import { ChildrenThemesProps } from "../../model/ChildrenThemesProps/childrenThemesProps";

const Main = ({ themes, children }: ChildrenThemesProps) => {
    const [lightMode, darkMode] = themes;
    return (
        <Box
            bg={useColorModeValue(lightMode, darkMode)}
            color={useColorModeValue(darkMode, lightMode)}
        >
            <main>{children}</main>
        </Box>
    );
};

export default Main;
