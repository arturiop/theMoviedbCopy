import { Button } from "@chakra-ui/button";
import { Flex, Heading } from "@chakra-ui/layout";
import Link from "next/link";
import { FC } from "react";
import MainContainer from "../components/MainContainer";

const NotFound: FC = () => (
  <MainContainer>
    <Flex flexDirection='column' alignItems='center' m='5%'>
      <Heading fontSize='4xl' color='red'>
        404
      </Heading>
      <Heading color='black'>OOPS, SOORRY WE CAN`T FIND THAT PAGE!</Heading>
      <Heading>
        Either something went wrong or the page doesn`t exist anymore
      </Heading>
      <Link href={"/"}>
        <Button m='5' bgColor='black' color='white'>
          HOME PAGE
        </Button>
      </Link>
    </Flex>
  </MainContainer>
);

export default NotFound;
