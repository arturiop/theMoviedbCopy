import { Button } from "@chakra-ui/button";
import { SimpleGrid } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuList } from "@chakra-ui/menu";
import React, { FC } from "react";
import LinksCreator from "./LinksCreator";

const HeaderBar: FC<PropsType> = ({ data }) => {
  const categories = data.map((item, index) => (
    <Menu key={index}>
      <MenuButton
        as={Button}
        p='2'
        color='white'
        _focus={{ outline: "none" }}
        _hover={{ shadow: "none" }}
      >
        {item.title}
      </MenuButton>
      <MenuList>
        <LinksCreator data={item.subtypes} />
      </MenuList>
    </Menu>
  ));

  return (
    <SimpleGrid columns={data.length} spacing={0}>
      {categories}
    </SimpleGrid>
  );
};
export default HeaderBar;

type PropsType = {
  data: any[];
};
