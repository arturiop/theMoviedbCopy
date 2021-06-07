import { Avatar } from "@chakra-ui/avatar";
import { StarIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Link, Text } from "@chakra-ui/layout";
import { FC } from "react";
import { ReviewsAuthorType } from "../../../../types/types";
import { avRewPath } from "../../../config";

const mounths = [
  "January",
  "February",
  " March",
  "April",
  " May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const formatDate = (date: string) => {
  const formattedDate = date.substring(0, 10).split("-").reverse();
  // formattedDate.splice(1, 1, mounths[Number(date[1])]);
  formattedDate[1] = mounths[Number(date[1])];
  return formattedDate.join(" ");
};

export const BlockReviews: FC<PropsType> = ({ data }) => {
  const dateCreated = formatDate(data.created_at);
  const rating = data.author_details.rating + ".0";
  return (
    <Box>
      <Flex pb='2%'>
        <Avatar m='2%' src={avRewPath + data.author_details.avatar_path} />
        <Box>
          <Flex my='2%' align='center'>
            <Box>
              <Heading
                fontSize='22'
                mr='2%'
              >{`A review by ${data.author}`}</Heading>

              <Text>{`Written by ${data.author} on ${dateCreated}`}</Text>
            </Box>

            <Box
              ml='2%'
              py='1%'
              px='3%'
              bgColor='black'
              color='white'
              borderRadius='10'
            >
              <StarIcon /> {rating ? rating : 0}
            </Box>
          </Flex>
          <Text noOfLines={5}>{data.content}</Text>
          {""}
          <Link ontWeight='bold'>read the rest.</Link>
        </Box>
      </Flex>
    </Box>
  );
};

type PropsType = {
  data: ReviewsAuthorType;
};
