import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";

import "../styles/prism-material-oceanic.css";
import "../styles/github-markdown.css";
import '../styles/global.css';

import theme from "../src/theme/index";
import Layout from "../src/components/Layout/Layout";
import HeadTags from "../src/components/HeadTags/HeadTags";

function MyApp({ Component, pageProps }:AppProps) {
  const themes = [theme.colorsTags.white, theme.colorsTags.black];
  
  return (
    <>
      <HeadTags />
      <ChakraProvider theme={theme}>
        <Layout themes={themes}>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
