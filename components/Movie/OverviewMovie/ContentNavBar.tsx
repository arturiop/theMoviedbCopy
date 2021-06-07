import { Container, SimpleGrid } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Menu, MenuButton, MenuList } from "@chakra-ui/menu";
import { FC } from "react";
import LinksCreator from "../../header/LinksCreator";
import { ChevronDownIcon } from "@chakra-ui/icons";

const ContentNavBar: FC<PropsType> = ({ data }) => {
  const categories = data.map((item, index) => (
    <Menu key={index}>
      <MenuButton
        as={Button}
        h='46'
        fontSize='16px'
        color='black'
        _hover={{ bg: "none" }}
        rightIcon={<ChevronDownIcon />}
      >
        {item.title}
      </MenuButton>
      <MenuList>
        <LinksCreator data={item.subtypes} />
      </MenuList>
    </Menu>
  ));

  return (
    <Container maxW={400} mx='auto'>
      <SimpleGrid columns={4} spacing={0}>
        {categories}
      </SimpleGrid>
    </Container>
  );
};

export default ContentNavBar;

type PropsType = {
  data: any[];
};
