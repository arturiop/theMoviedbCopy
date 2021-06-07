import { Button } from "@chakra-ui/button";
import { Box, Flex, Heading, Link } from "@chakra-ui/layout";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { useQuery } from "react-query";
import {
  ReviewsAuthorType,
  ResposeDataType,
  MovieDataType,
} from "../../../../types/types";
import { BlockReviews } from "./BlockReviews";

export const Discussions = () => {
  return <div>Discussions</div>;
};

export const Reviews: FC<PropsReviews> = ({ data, selected }) => {
  const { query } = useRouter();
  const { data: mData } = useQuery(["movieData", { id: query.id }]);
  const movieData = mData as MovieDataType;

  const reviews = data.map((item, index) => (
    <BlockReviews key={index} data={item} />
  ));
  return (
    <Box>
      {data.length
        ? reviews[selected]
        : `We don't have any reviews for ${movieData.title}. Would you like to write one?`}
    </Box>
  );
};

const Social: FC<PropsType> = ({ data }) => {
  const [value, setValue] = useState(0);

  const showReviews = () => {
    setValue(Math.floor(Math.random() * data.length));
  };

  return (
    <Box>
      <Heading>Social</Heading>

      <Tabs size='md' variant='enclosed'>
        <TabList>
          <Tab
            onClick={showReviews}
            _focus={{ shadow: "none" }}
            _selected={{ borderBottom: "5px solid" }}
          >
            Reviews {`${data.length}`}
          </Tab>

          <Tab
            _focus={{ shadow: "none" }}
            _selected={{ borderBottom: "5px solid" }}
          >
            Discussions 0
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Box shadow='0px 0px 35px -5px rgba(23, 30, 36, 0.2)' w='100%'>
              <Reviews selected={value} data={data} />
            </Box>
            <Box mt='2%'>
              <Heading fontSize='22'>
                <Link _hover={{ color: "rgba(152, 156, 159, 0.7)" }}>
                  Read All Reviews
                </Link>
              </Heading>
            </Box>
          </TabPanel>
          <TabPanel>
            <Box shadow='0px 0px 35px -5px rgba(23, 30, 36, 0.2)' w='100%'>
              <Discussions />
            </Box>
            <Box mt='2%'>
              <Link fontWeight='bold'> Go to Discussions </Link>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

const SocialContainer: FC = () => {
  const { query } = useRouter();
  const { data, isLoading, error } = useQuery([
    "reviews",
    { id: query.id, path: "/reviews" },
  ]);

  const rewviewsData = data as ResposeDataType<ReviewsAuthorType>;
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return <Social data={rewviewsData.results} />;
};

export default SocialContainer;

type PropsType = {
  data: ReviewsAuthorType[];
};

type PropsReviews = {
  data: ReviewsAuthorType[];
  selected: number;
};
