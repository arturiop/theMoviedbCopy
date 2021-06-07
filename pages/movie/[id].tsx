import { FC } from "react";
import MovieContainer from "../../components/Movie";
import MainContainer from "../../components/MainContainer";
import { MovieDataType } from "../../types/types";
import { useQuery } from "react-query";
import { useRouter } from "next/router";

const Movie: FC = () => {
  const { query } = useRouter();

  const { data, error, isLoading } = useQuery(["movieData", { id: query.id }]);
  const movieData = data as MovieDataType;

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <MainContainer title={movieData.title}>
      <MovieContainer />
    </MainContainer>
  );
};

export default Movie;
