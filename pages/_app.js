import "../styles/github-markdown.css";
import "../styles/blog.css";
import "../styles/scroll.css";
import "../styles/prism-material-oceanic.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../src/theme/index";
import Layout from "../src/components/Layout/Layout";
import HeadTags from "../src/components/HeadTags/HeadTags";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <HeadTags />
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
