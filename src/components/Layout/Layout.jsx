import { Box } from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = ({ children, themes }) => (
  <>
    <Box>
      <header>
        <Navbar themes={themes}></Navbar>
      </header>
      <main>{children}</main>
      <footer>
        <Footer themes={themes}></Footer>
      </footer>
    </Box>
  </>
);

export default Layout;
