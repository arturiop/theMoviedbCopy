import { Button } from "@chakra-ui/button";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import Link from "next/link";
import React, { FC, memo } from "react";

const LinksCreator: FC<PropsType> = ({ data }) => {
  const links = data.map((item, index) => (
    <MenuItem key={index}>
      {!!item.title ? (
        <Menu placement='right-start' key={index}>
          <MenuButton
            _hover={{ shadow: "none" }}
            as={Button}
            w='100%'
            h='46'
            fontSize='16px'
            color='black'
            rightIcon={<ChevronRightIcon />}
          >
            {item.title}
          </MenuButton>

          <MenuList>
            <LinksCreator data={item.subtypes} />
          </MenuList>
        </Menu>
      ) : (
        <Link href={item.link}>
          <a>{item.description}</a>
        </Link>
      )}
    </MenuItem>
  ));
  return <>{links}</>;
};

export default LinksCreator;

type PropsType = {
  data: Array<any>;
};
