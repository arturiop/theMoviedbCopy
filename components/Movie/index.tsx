import { Box, Container } from "@chakra-ui/layout";
import React, { FC } from "react";
import OverviewMovieContainer from "./OverviewMovie";
import ContentNavBar from "./OverviewMovie/ContentNavBar";
import MovieContent from "./DepthReview/insex";
import { dataContent } from "../config";

const MovieContainer: FC = () => {
  return (
    <Box as='main' w='100%'>
      <ContentNavBar data={dataContent} />
      <OverviewMovieContainer />
      <MovieContent />
    </Box>
  );
};

export default MovieContainer;
