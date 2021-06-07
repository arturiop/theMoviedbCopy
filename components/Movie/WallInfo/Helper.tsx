import { DownloadIcon, QuestionOutlineIcon } from "@chakra-ui/icons";
import { Box, Link } from "@chakra-ui/layout";
import { FC, memo } from "react";

export const Helper: FC = memo(() => {
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
});
