import { Box, Container } from "@chakra-ui/layout";
import React, { FC, memo } from "react";
import { useQuery } from "react-query";
import { MovieDataType } from "../../../types/types";
import { bgdropPath } from "../../config";
import FilmContent from "./FilmContent";
import { useRouter } from "next/router";

const OverviewMovie: FC<PropsType> = ({ data }) => {
  return (
    <Box
      bgPosition='center'
      bgSize='100%'
      bgRepeat='no-repeat'
      bgImage={bgdropPath + data.backdrop_path}
    >
      <Box w='100%' bgColor={`rgba(40, 40, 40,.8)`}>
        <Container maxW='container.xl' p={10}>
          <FilmContent data={data} />
        </Container>
      </Box>
    </Box>
  );
};

const OverviewMovieContainer: FC = memo(() => {
  const { query } = useRouter();

  const { data, error, isLoading } = useQuery(["movieData", { id: query.id }]);

  const movieData = data as MovieDataType;

  return (
    <Box minH='250'>
      {error ? (
        <div>Error</div>
      ) : isLoading ? (
        <div>Loading...</div>
      ) : (
        <OverviewMovie data={movieData} />
      )}
    </Box>
  );
});

export default OverviewMovieContainer;

type PropsType = {
  data: MovieDataType;
};
