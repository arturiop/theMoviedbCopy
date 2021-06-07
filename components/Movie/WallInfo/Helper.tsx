import { DownloadIcon, QuestionOutlineIcon } from "@chakra-ui/icons";
import { Box, Link } from "@chakra-ui/layout";
import { FC } from "react";

export const Helper: FC = () => {
  return (
    <Box>
      <Link>
        <DownloadIcon /> Keyboard Shortcuts
      </Link>
      <Box>
        <Link>
          <QuestionOutlineIcon /> Report an Issue
        </Link>
      </Box>
    </Box>
  );
};
