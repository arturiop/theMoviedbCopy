import { Box, Text } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import { FC } from "react";
import { useQuery } from "react-query";
import { MovieDataType } from "../../../types/types";

const PartInformation: FC<PropsType> = ({ value, title }) => {
  return (
    <Box my='5'>
      <Text as='h3'>{title}</Text>
      <Box>{value ? value : "-"}</Box>
    </Box>
  );
};

const FilmInfo: FC = () => {
  const { query } = useRouter();

  const { data, isLoading } = useQuery(["movieData", { id: query.id }]);

  const movieData = data as MovieDataType;

  if (isLoading) return <div>Loading...</div>;

  return (
    <Box>
      <PartInformation value={movieData.status} title={"Status"} />

      <PartInformation
        value={movieData.original_language}
        title={"Original Language"}
      />

      <PartInformation value={movieData.budget} title={"Budget"} />

      <PartInformation value={movieData.revenue} title={"Revenue"} />
    </Box>
  );
};

export default FilmInfo;

type PropsType = {
  value: string | number;
  title: string;
};
