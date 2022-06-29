import { Box } from "@chakra-ui/react";

import Navbar from "../Navbar/Navbar";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { ChildrenThemesProps } from "../../model/ChildrenThemesProps/childrenThemesProps";

const Layout = ({ children, themes }: ChildrenThemesProps) => (
    <Box>
        <header>
            <Navbar themes={themes}></Navbar>
        </header>
        <Main themes={themes}>{children}</Main>
        <footer>
            <Footer themes={themes}></Footer>
        </footer>
    </Box>
);

export default Layout;
