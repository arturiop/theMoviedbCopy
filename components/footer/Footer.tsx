import { Box, Container, Flex, Heading } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import React, { FC, useState } from "react";
import LinksCreator from "./LinksCreator";
import { Image } from "@chakra-ui/image";
import { dataFooter, bottomLogo } from "../config";

const FooterColum: FC<PropsType> = ({ title, subtypes }) => (
  <Box>
    <Heading fontSize='22'>{title.toUpperCase()}</Heading>
    <LinksCreator data={subtypes} />
  </Box>
);

const Footer: FC = () => {
  const [data] = useState(dataFooter);
  const [userName] = useState("Artur");
  const links = data.map((item, index) => (
    <FooterColum key={index} title={item.title} subtypes={item.subtypes} />
  ));
  return (
    <Box as='footer' bgColor='brand.100' color='#fff'>
      <Container maxW='container.md' py='20'>
        <Flex justify='space-between'>
          <Box>
            <Image
              src={bottomLogo}
              alt='bottom logo'
              htmlWidth='130px'
              htmlHeight='94px'
            />
            <Button
              py='2'
              px='4'
              color='#18bbe6'
              bg='white'
              _hover={{ bg: "white" }}
              fontSize='18'
              mt='5'
            >{`Hi ${userName.toLowerCase()}!`}</Button>
          </Box>
          {links}
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;

type PropsType = {
  title: string;
  subtypes: Array<any>;
};
