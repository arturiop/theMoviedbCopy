import { Button } from "@chakra-ui/button";
import { Box, Heading } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import { FC, memo } from "react";
import { useQuery } from "react-query";

const KeyBoardsContainer: FC = memo(() => {
  const { query } = useRouter();

  const { data, isLoading } = useQuery([
    "keywords",
    { id: query.id, path: "/keywords" },
  ]);
  const keyboardsData = data as KeyBoardsDataType;
  if (isLoading) return <div>Loading...</div>;

  return (
    <Box>
      <KeyBoards data={keyboardsData} />
    </Box>
  );
});

export default KeyBoardsContainer;

const KeyBoards: FC<PropsType> = memo(({ data }) => {
  const keywords = data.keywords.map((item: any, index: number) => (
    <Button m='2' bgColor='gray.100' color='black' key={index}>
      {item.name}
    </Button>
  ));
  return (
    <Box>
      <Heading>Keywords</Heading>
      <Box>{keywords}</Box>
    </Box>
  );
});

type PropsType = {
  data: KeyBoardsDataType;
};

type KeyBoardsDataType = {
  id: number;
  keywords: Array<KeyBoardsType>;
};
type KeyBoardsType = {
  id: number;
  name: string;
};
