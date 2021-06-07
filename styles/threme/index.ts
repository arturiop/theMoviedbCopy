import { extendTheme } from "@chakra-ui/react";
import { Button } from "./components/button";
import { Link } from "./components/link";
import { Menu } from "./components/tab";

export const customThrems = {
  components: {
    Button,
    Link,
    Menu,
  },

  fonts: {
    body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  },
  colors: {
    brand: {
      100: "#032541",
    },
  },
};

const theme = extendTheme(customThrems);

export default theme;
