import MainContainer from "../components/MainContainer";
import { FC, useState } from "react";
import { filmData } from "../components/config";
import { Box, Heading, Text } from "@chakra-ui/layout";
import Link from "next/link";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { Button } from "@chakra-ui/button";

const Index: FC = () => {
  const films = filmData;
  const [isO, setIsO] = useState(false);
  return (
    <MainContainer>
      <Heading>Film List</Heading>
      <Box>
        {films.map((film) => (
          <Text key={film.id}>
            <Link href={`/movie/${film.id}`}>
              <a>{film.title}</a>
            </Link>
          </Text>
        ))}
      </Box>
    </MainContainer>
  );
};

export default Index;
