export const Button = {
  baseStyle: {
    borderRadius: "base",
    _hover: { bg: "none" },
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
    },
  },

  defaultProps: {
    size: "sm",
    variant: "solid",
  },
};
