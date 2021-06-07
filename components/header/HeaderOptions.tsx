import { Avatar } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import { AddIcon, BellIcon, SearchIcon } from "@chakra-ui/icons";
import { HStack } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import React, { FC } from "react";

const HeaderOptions: FC = () => (
  <HStack spacing='30px' height='10'>
    <Menu>
      <MenuButton variant='primary' as={Button}>
        <AddIcon color='white' />
      </MenuButton>

      <MenuList color='#000'>
        <MenuItem onClick={() => console.log("Created New TV Show")}>
          Add New Movie
        </MenuItem>
        <MenuItem onClick={() => console.log("Created New TV Show")}>
          Add New TV Show
        </MenuItem>
      </MenuList>
    </Menu>

    <Menu>
      <MenuButton
        h={6}
        variant='outline'
        _hover={{ bg: "white", color: "black" }}
        p='1'
        as={Button}
      >
        EN
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => console.log("Created New TV Show")}>
          Add New Movie
        </MenuItem>
        <MenuItem onClick={() => console.log("Created New TV Show")}>
          Add New TV Show
        </MenuItem>
      </MenuList>
    </Menu>

    <Menu>
      <MenuButton variant='primary' color='white' as={Button}>
        <BellIcon h={6} w={5} />
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => console.log("Created New TV Show")}>
          Add New Movie
        </MenuItem>
        <MenuItem onClick={() => console.log("Created New TV Show")}>
          Add New TV Show
        </MenuItem>
      </MenuList>
    </Menu>

    <Menu placement='bottom'>
      <MenuButton _hover={{ bg: "none" }} as={Button}>
        <Avatar h={8} w={8} src='https://bit.ly/dan-abramov' />
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => console.log("Created New TV Show")}>
          Add New Movie
        </MenuItem>
        <MenuItem onClick={() => console.log("Created New TV Show")}>
          Add New TV Show
        </MenuItem>
      </MenuList>
    </Menu>

    <Menu>
      <MenuButton _hover={{ bg: "none" }} as={Button}>
        <SearchIcon h={6} w={6} color='blue.300' />
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => console.log("Created New TV Show")}>
          Add New Movie
        </MenuItem>
        <MenuItem onClick={() => console.log("Created New TV Show")}>
          Add New TV Show
        </MenuItem>
      </MenuList>
    </Menu>
  </HStack>
);
export default HeaderOptions;
