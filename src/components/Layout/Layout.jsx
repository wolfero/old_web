import { Box } from "@chakra-ui/react";

import Navbar from "../Navbar/Navbar";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

const Layout = ({ children, themes }) => (
  <>
    <Box>
      <header>
        <Navbar themes={themes}></Navbar>
      </header>
      <Main themes={themes} children={children} />
      <footer>
        <Footer themes={themes}></Footer>
      </footer>
    </Box>
  </>
);

export default Layout;
