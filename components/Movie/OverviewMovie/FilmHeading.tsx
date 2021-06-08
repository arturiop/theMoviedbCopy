import { Box, Flex, Link, Text } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/react";
import React, { FC, memo } from "react";
import { MovieDataType } from "../../../types/types";

const calculateDuration = (runTime: number) => {
  const hours = Math.floor(runTime / 60);
  const minutes = runTime % 60;
  return `${hours}h ${minutes}m`;
};

export const FilmHeading: FC<PropsType> = memo(({ data }) => {
  const releaseDate = data.release_date.split("-").reverse().join("/");
  const releaseYear = `(${data.release_date.substring(0, 4)})`;

  const temp = data.production_countries
    .map((item) => item.iso_3166_1)
    .join(",");
  const productionCountries = `(${temp})`;
  const genres = data.genres.map((item, index) => (
    <Link key={index}>{item.name}</Link>
  ));

  const filmDuration = calculateDuration(data.runtime as number);

  return (
    <Box>
      <Flex>
        <Heading>{data.title}</Heading>
        <Text fontSize={32}>{releaseYear}</Text>
      </Flex>

      <Flex mb={6}>
        <Text mr={"1%"}>age for watching</Text>
        <Text>{releaseDate}</Text>
        <Text mr={"1.5%"}>{productionCountries}</Text>
        <li style={{ marginRight: "1.5%" }}>{genres}</li>

        {data.runtime && <li>{filmDuration}</li>}
      </Flex>
    </Box>
  );
});

type PropsType = {
  data: MovieDataType;
};
