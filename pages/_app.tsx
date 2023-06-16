import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layout";
import { SessionProvider } from "next-auth/react";
import { theme } from "../theme";
import { FormProvider } from "../context/FormContext";
import { SizeProvider } from "../context/SizeContext";
import "../styles/globals.css"

import "@fontsource/inter";
interface AppProps {
  Component: any;
  pageProps: any;
}

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <SessionProvider session={session}>
        <SizeProvider>
          <FormProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </FormProvider>
        </SizeProvider>
      </SessionProvider>
    </ChakraProvider>
  );
};

export default App;
