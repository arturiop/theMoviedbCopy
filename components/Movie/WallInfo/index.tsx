import { Box, Divider, Stack } from "@chakra-ui/layout";
import React, { FC, memo } from "react";
import FilmInfo from "./FilmInfo";
import { Helper } from "./Helper";
import KeyBoardsContainer from "./Keywords";
import SocialLinksContainer from "./SocialLinks";

const WallInfo: FC = memo(() => {
  return (
    <Box>
      <SocialLinksContainer />
      <FilmInfo />
      <KeyBoardsContainer />
      <Stack direction='row' h='50px' p={4}>
        <Divider />
      </Stack>
      <Helper />
    </Box>
  );
});

export default WallInfo;
