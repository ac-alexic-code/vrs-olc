const mixins = {
  forDesktop: (content: string) => `
    @media screen and (min-width: 601px) {
      ${content}
    }
  `,
};

const colors = {
  white: "#ffffff",
  black: "#000000",
};

const fontSize = {
  base: "16px",
};

const padding = {
  default: "20px",
};

const margin = {
  default: "20px",
};

const border = {
  default: `2px solid ${colors.black}`,
};

export const theme = {
  colors,
  fontSize,
  padding,
  margin,
  border,
  mixins,
};

export type Theme = typeof theme;
