import { EmailIcon, PhoneIcon, TimeIcon } from "@chakra-ui/icons";
import { Box, Flex, Link } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import { FC, memo } from "react";
import { useQuery } from "react-query";
import { fbPath, instPath, twitterPath } from "../../config";

const SocialLinks: FC<PropsType> = ({ data }) => {
  return (
    <Flex mb='1%'>
      <Box m='3'>
        {data.facebook_id ? (
          <Link href={fbPath + data.facebook_id}>
            <EmailIcon />
          </Link>
        ) : null}
      </Box>
      <Box m='3'>
        {data.instagram_id ? (
          <Link href={instPath + data.instagram_id}>
            <PhoneIcon />
          </Link>
        ) : null}
      </Box>
      <Box m='3'>
        {data.twitter_id ? (
          <Link href={twitterPath + data.twitter_id}>
            <TimeIcon />
          </Link>
        ) : null}
      </Box>
    </Flex>
  );
};

const SocialLinksContainer = memo(() => {
  const { query } = useRouter();

  const { data, error, isLoading } = useQuery([
    "external",
    { id: query.id, path: "/external_ids" },
  ]);
  const external = data as ExternalType;

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return <SocialLinks data={external} />;
});

export default SocialLinksContainer;

type PropsType = {
  data: ExternalType;
};
type ExternalType = {
  imdb_id: string | null;
  facebook_id: string | null;
  instagram_id: string | null;
  twitter_id: string | null;
  id: number;
};
