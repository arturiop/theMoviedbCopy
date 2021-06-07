import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { FC, memo } from "react";
import { bgdropPath } from "../../config";
import { FilmHeading } from "./FilmHeading";
import { ActionButtons } from "./ActionButtons";
import { WatchNowButton } from "./WatchNowButton";
import { MovieDataType } from "../../../types/types";

const FilmContent: FC<PropsT> = ({ data }) => {
  return (
    <Box as='main' w='100%'>
      <Flex>
        <Box>
          <Image
            htmlWidth='300px'
            htmlHeight='450px'
            src={bgdropPath + data.poster_path}
          />
          <WatchNowButton />
        </Box>
        <Box w='100%' color='white' px='3%' py='4%'>
          <FilmHeading data={data} />
          <ActionButtons vote={data.vote_average} />
          <Text>{data.tagline}</Text>
          <Overview data={data.overview} />
        </Box>
      </Flex>
    </Box>
  );
};

export default FilmContent;

export const Overview: FC<PropsType> = memo(({ data }) => {
  return (
    <Box>
      <Heading my='1%'>Overview</Heading>
      <Text>{data}</Text>
    </Box>
  );
});

type PropsType = {
  data: string | null;
};

type PropsT = {
  data: MovieDataType;
};
