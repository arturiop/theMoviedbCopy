import { Container, Flex, SimpleGrid } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Menu, MenuButton, MenuList } from "@chakra-ui/menu";
import { FC, memo } from "react";
import LinksCreator from "../../header/LinksCreator";
import { ChevronDownIcon } from "@chakra-ui/icons";

const ContentNavBar: FC<PropsType> = memo(({ data }) => {
  const categories = data.map((item, index) => (
    <Menu key={index}>
      <MenuButton
        as={Button}
        h='46'
        fontSize='16px'
        color='black'
        _hover={{ bg: "none" }}
      >
        {item.title}
        <ChevronDownIcon />
      </MenuButton>
      <MenuList>
        <LinksCreator data={item.subtypes} />
      </MenuList>
    </Menu>
  ));

  return (
    <Container>
      <Flex>{categories}</Flex>
    </Container>
  );
});

export default ContentNavBar;

type PropsType = {
  data: any[];
};
