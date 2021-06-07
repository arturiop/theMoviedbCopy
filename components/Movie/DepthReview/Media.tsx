import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, Link } from "@chakra-ui/layout";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { FC, memo } from "react";
import { useQuery } from "react-query";
import { arraySlice } from "../../../common/commonFunc";
import {
  DataImagesMovieType,
  ImageType,
  VideoDataType,
  VideoType,
} from "../../../types/types";
import { pathPostrs, videoPath } from "../../config";

const MostPopular: FC<PropsMostPopular> = memo(({ data }) => {
  return (
    <Flex>
      <Box w='50%'>
        {data.video ? (
          <iframe
            width='460'
            height='315'
            src={videoPath + data.video}
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          ></iframe>
        ) : null}
      </Box>
      {data.posters && <Image src={pathPostrs + data.posters} />}
    </Flex>
  );
});

const VideoBox: FC<PropsVideoBox> = memo(({ data }) => {
  const videos = data.map((item, index) => (
    <iframe
      key={index}
      width='460'
      height='315'
      src={videoPath + item.key}
      title='YouTube video player'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
    ></iframe>
  ));
  return <Flex>{videos}</Flex>;
});

const DrawsBackDrops: FC<PropsDrawsImages> = memo(({ data }) => {
  const backdrops = data.map((item, index) => (
    <Image
      key={index}
      maxH='50%'
      width='100%'
      src={pathPostrs + item.file_path}
    />
  ));
  return <Flex>{backdrops}</Flex>;
});

const DrawsImages: FC<PropsDrawsImages> = memo(({ data }) => {
  const images = data.map((item, index) => (
    <Image key={index} src={pathPostrs + item.file_path} />
  ));
  return (
    <Flex w='100%' overflowX='scroll'>
      {images}
    </Flex>
  );
});

const Media: FC<Media> = memo(({ videos, images }) => {
  const posters = images.posters;
  const backdrops = images.backdrops;
  const video = videos.results;

  const getObjectPopularMedias = (posters: ImageType[], video: VideoType[]) => {
    const data: PopularMedia = {};
    if (posters.length) {
      data.posters = posters[0].file_path;
    }
    if (video.length) {
      data.video = video[0].key;
    }
    return data;
  };

  return (
    <Box>
      <Heading>Media</Heading>
      <Tabs size='md' variant='enclosed'>
        <TabList>
          <Tab
            _focus={{ shadow: "none" }}
            _selected={{ borderBottom: "5px solid" }}
          >
            Most Popular
          </Tab>
          <Tab
            _focus={{ shadow: "none" }}
            _selected={{ borderBottom: "5px solid" }}
          >{`Video ${video.length}`}</Tab>
          <Tab
            _focus={{ shadow: "none" }}
            _selected={{ borderBottom: "5px solid" }}
          >
            {" "}
            {`Backdrops ${backdrops.length}`}
          </Tab>
          <Tab
            _focus={{ shadow: "none" }}
            _selected={{ borderBottom: "5px solid" }}
          >
            {" "}
            {`Posters ${posters.length}`}
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel w='100%'>
            <MostPopular data={getObjectPopularMedias(posters, video)} />
          </TabPanel>
          <TabPanel w='100%'>
            <VideoBox data={arraySlice(video, 2)} />
          </TabPanel>
          <TabPanel w='100%'>
            <DrawsBackDrops data={arraySlice(backdrops, 2)} />
          </TabPanel>
          <TabPanel w='100%'>
            <DrawsImages data={arraySlice(posters, 6)} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
});

const MediaContainer = memo(() => {
  const { query } = useRouter();
  const { data: images, isLoading: isLoadingImages } = useQuery([
    "images",
    { id: query.id, path: "/images" },
  ]);
  const imagesData = images as DataImagesMovieType;

  const { data: videos, isLoading: isLoagingVideos } = useQuery([
    "videos",
    { id: query.id, path: "/videos" },
  ]);
  const videosData = videos as VideoDataType;

  if (isLoadingImages || isLoagingVideos) return <div>Loading...</div>;
  return <Media videos={videosData} images={imagesData} />;
});

export default MediaContainer;

type PropsDrawsImages = {
  data: Array<any>;
};

type PropsVideoBox = {
  data: VideoType[];
};

type PropsMostPopular = {
  data: PopularMedia;
};

type PopularMedia = {
  video?: string;
  posters?: string;
};

type Media = {
  videos: VideoDataType;
  images: DataImagesMovieType;
};
