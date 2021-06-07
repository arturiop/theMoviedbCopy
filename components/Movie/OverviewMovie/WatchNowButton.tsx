import { Button } from "@chakra-ui/button";
import { Box, Flex } from "@chakra-ui/layout";
import { FC, memo } from "react";

export const WatchNowButton: FC = memo(() => {
  return (
    <>
      <Flex
        bg='brand.100'
        alignItems='center'
        justify='center'
        color='whiteAlpha.700'
      >
        <Box bg='blue'>Buy</Box>
        <Flex ml='3%' flexDirection='column'>
          <Box>Available to Rent or Buy</Box>
          <Button
            color='white'
            _active={{ shadow: "none" }}
            _before={{ shadow: "none" }}
            _hover={{ shadow: "none" }}
          >
            Watch Now
          </Button>
        </Flex>
      </Flex>
    </>
  );
});
