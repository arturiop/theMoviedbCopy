import MainContainer from "../components/MainContainer";
import { FC } from "react";
import { filmData } from "../components/config";
import { Box, Heading, Text } from "@chakra-ui/layout";
import Link from "next/link";

const Index: FC = () => {
  const films = filmData;

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
