import { Image } from "@chakra-ui/image";
import { Container, Flex, HStack } from "@chakra-ui/layout";
import { FC } from "react";
import { dataHeader, logoRef } from "../config";
import HeaderBar from "./HeaderBar";
import HeaderOptions from "./HeaderOptions";

const Header: FC = () => (
  <HStack as='header' bg='brand.100' minH='16'>
    <Container maxW='container.xl' px={10}>
      <Flex w='100%' align='center' justify='space-between'>
        <Flex>
          <Image src={logoRef} alt='logoRef' htmlWidth='154' htmlHeight='20' />
          <HeaderBar data={dataHeader} />
        </Flex>

        <HeaderOptions />
      </Flex>
    </Container>
  </HStack>
);
export default Header;
