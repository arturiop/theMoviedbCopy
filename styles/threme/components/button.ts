export const Button = {
  baseStyle: {
    borderRadius: "base",
  },

  sizes: {
    sm: {
      fontSize: "sm",
      px: 3,
      py: 2,
    },
    md: {
      fontSize: "md",
      px: 6,
      py: 4,
    },
  },

  variants: {
    outline: {
      borderBotton: "1px solid",
      borderColor: "white",
      color: "white",
    },
    solid: {
      bg: "",
      color: "black",
      _active: { bg: "none" },
      _before: { bg: "none" },
      _focus: { shadow: "none" },
      _hover: { bg: "none" },
    },
  },

  defaultProps: {
    size: "sm",
    variant: "solid",
  },
};
