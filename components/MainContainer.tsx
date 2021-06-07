import { Box, Flex } from "@chakra-ui/layout";
import Head from "next/head";
import { FC } from "react";
import Footer from "./footer/Footer";
import Header from "./header";

const MainContainer: FC<P> = ({ children, title }) => {
  return (
    <>
      <Head>
        <meta></meta>
        <title>{title ? title : "The Movie"}</title>
      </Head>
      <Flex minH='100vh' flexDirection='column'>
        <header>
          <Header />
        </header>

        <main>{children}</main>

        <Box as='footer' mt='auto'>
          <Footer />
        </Box>
      </Flex>
    </>
  );
};

export default MainContainer;
type P = {
  title?: string;
};
