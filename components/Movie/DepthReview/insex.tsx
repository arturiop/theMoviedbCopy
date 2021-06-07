import { Box, Container, Divider, Flex, Stack } from "@chakra-ui/layout";
import { FC } from "react";
import WallInfo from "../WallInfo";
import CastCrewContainer from "./CastCrew";
import MediaContainer from "./Media";
import Recomendations from "./Recomendations";
import SocialContainer from "./Social/Social";

const MovieContent: FC = () => {
  return (
    <Box w='100%'>
      <Container maxW='container.xl' p={10}>
        <Flex>
          <Box maxW='80%'>
            <CastCrewContainer />
            <Stack direction='row' h='50px' p={4}>
              <Divider />
            </Stack>
            <SocialContainer />
            <Stack direction='row' h='50px' p={4}>
              <Divider />
            </Stack>
            <MediaContainer />
            <Stack direction='row' h='50px' p={4}>
              <Divider size='100' />
            </Stack>
            <Recomendations />
          </Box>
          <Box pl='2%'>
            <WallInfo />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default MovieContent;
