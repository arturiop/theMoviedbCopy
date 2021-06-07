import { Button } from "@chakra-ui/button";
import {
  AttachmentIcon,
  HamburgerIcon,
  StarIcon,
  TriangleUpIcon,
} from "@chakra-ui/icons";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/progress";
import { Tooltip } from "@chakra-ui/tooltip";
import { FC } from "react";

export const ActionButtons: FC<PropsType> = ({ vote }) => {
  const rating = vote * 10;
  return (
    <Box mb='3%'>
      <Flex align='center'>
        <CircularProgress
          size={20}
          value={rating}
          capIsRound
          trackColor='black'
          bg='gray.900'
          borderRadius='50'
          color='green.400'
          thickness={6}
          fontSize={60}
        >
          <CircularProgressLabel>{rating}%</CircularProgressLabel>
        </CircularProgress>
        <Text m='1%' maxW='10' wordBreak='break-word'>
          User Score
        </Text>
        <Flex alignItems='center'>
          <ButOn text='Add to list'>
            <HamburgerIcon />
          </ButOn>
          <ButOn text='Mark as fovourite'>
            <TriangleUpIcon />
          </ButOn>
          <ButOn text='Add to your watchlist'>
            <AttachmentIcon />
          </ButOn>
          <ButOn text='Rate It!'>
            <StarIcon />
          </ButOn>
          <Box>
            <Button color='white'>
              <HamburgerIcon mr='5' />
              Play Traller
            </Button>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
type PropsType = {
  vote: number;
};

const ButOn: FC<PropsT> = ({ children, text }) => {
  return (
    <Box mx='5%'>
      <Tooltip hasArrow label={text} bg='gray.800'>
        <Button
          borderRadius='50'
          h='10'
          w='10'
          _hover={{ shadow: "none" }}
          bgColor='gray.800'
          color='white'
        >
          {children}
        </Button>
      </Tooltip>
    </Box>
  );
};

type PropsT = {
  text?: string;
};