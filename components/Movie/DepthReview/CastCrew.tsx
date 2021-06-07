import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, Link, Text } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import React, { FC, memo } from "react";
import { useQuery } from "react-query";
import { arraySlice } from "../../../common/commonFunc";
import { CastType, CreditsDataType } from "../../../types/types";
import { avatarNotFound, profilePhotoPath } from "../../config";

const CardArtist: FC<PropsCardArtist> = memo(({ data }) => {
  return (
    <Box
      minW='150px'
      h='250px'
      my='3%'
      mx='1%'
      shadow='0px 10px 34px -4px rgba(23, 30, 36, 0.2)'
    >
      <Box>
        <Image
          boxSize='100%'
          borderTopRadius='5%'
          alt={data.name}
          src={
            data.profile_path
              ? profilePhotoPath + data.profile_path
              : avatarNotFound
          }
        />
      </Box>

      <Box fontSize='10' borderBottomRadius='5%' py='2%' px='4%'>
        <Heading fontSize='16'>{data.name}</Heading>
        <Text>{data.character}</Text>
      </Box>
    </Box>
  );
});

const CastCrew: FC<PropsType> = memo(({ data }) => {
  const quantityСards = 9;
  const res = arraySlice(data, quantityСards);
  const cast = res.map((item, index) => <CardArtist key={index} data={item} />);

  return (
    <Box w='100%' overflowX='scroll'>
      <Flex>
        {cast}

        {data.length > quantityСards && (
          <Box width='200' p='5%' m='auto'>
            <Link _hover={{ textDecoration: "none" }}>View More</Link>
          </Box>
        )}
      </Flex>
    </Box>
  );
});

const CastCrewContainer: FC = memo(() => {
  const { query } = useRouter();
  const { data, isLoading } = useQuery([
    "credits",
    { id: query.id, path: "/credits" },
  ]);
  const creditsData = data as CreditsDataType;

  if (isLoading) return <div>Loading...</div>;
  return (
    <Box>
      <Heading mb='2%'>Top Billed Cast</Heading>
      <CastCrew data={creditsData.cast} />
      <Box mt='2%'>
        <Heading fontSize='22'>
          <Link _hover={{ color: "rgba(152, 156, 159, 0.7)" }}>
            Full Cast & Crew
          </Link>
        </Heading>
      </Box>
    </Box>
  );
});

export default CastCrewContainer;

type PropsType = {
  data: CastType[];
};

type PropsCardArtist = {
  data: CastType;
};
