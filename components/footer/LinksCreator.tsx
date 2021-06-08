import { Box } from "@chakra-ui/layout";
import Link from "next/link";
import React, { FC } from "react";
import { ConfigDataSubtype } from "../../types/types";

const LinksCreator: FC<PropsType> = ({ data }) => {
  const links = data.map((item, index) => (
    <Box key={index}>
      <Link href={item.link}>
        <a>{item.description}</a>
      </Link >
    </Box> 
  ));
  return <>{links}</>;
};
export default LinksCreator;

type PropsType = {
  data: ConfigDataSubtype[];
};
