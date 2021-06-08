import { Button } from "@chakra-ui/button";
import {
  AttachmentIcon,
  CalendarIcon,
  StarIcon,
  ViewIcon,
} from "@chakra-ui/icons";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import { FC, memo } from "react";
import { useQuery } from "react-query";
import { RecomendationsData, ResposeDataType } from "../../../types/types";
import { pathPic } from "../../config";

const RecomendationBlock: FC<PropsType> = memo(({ data }) => {
  const rating = `${Math.round(data.vote_average * 10)}%`;
  const releseDate = data.release_date.split("-").reverse().join("/");
  return (
    <Box mx='4'>
      <Box>
        <Box>
          <Box _hover={{ display: "block" }} minW='290px' h='150px'>
            <Image boxSize='100%' src={pathPic + data.backdrop_path} />
          </Box>
          <Button
            position='absolute'
            display='none'
            bgColor='gray.100'
            color='black'
          >
            <CalendarIcon />
            <Text>{releseDate}</Text>
            <ViewIcon />
            <AttachmentIcon />
            <StarIcon />
          </Button>
        </Box>
        <Box mt='2%' justifyContent='space-between' display='flex'>
          <Box>{data.title}</Box>
          <Box>{rating}</Box>
        </Box>
      </Box>
    </Box>
  );
});

const Recomendations: FC = () => {
  const { query } = useRouter();
  const { data, error, isLoading } = useQuery([
    "recommendations",
    { id: query.id, path: "/recommendations" },
  ]);

  const recomendedData = data as ResposeDataType<RecomendationsData>;

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <Box>
      <Heading mb='2%'>Recommendations</Heading>
      <Flex w='100%' overflowX='scroll'>
        {recomendedData.results.map((item, index) => (
          <RecomendationBlock key={index} data={item} />
        ))}
      </Flex>
    </Box>
  );
};

export default Recomendations;

type PropsType = {
  data: RecomendationsData;
};
