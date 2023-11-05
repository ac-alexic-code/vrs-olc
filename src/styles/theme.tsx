const mixins = {
  forDesktop: (content: string) => {
    return `
      @media screen and (min-width: 601px) {
        ${content}
      }
    `;
  },

  defaultButton: () => `
    all: unset;
    text-transform: uppercase;
    cursor: pointer;
  `,

  defaultHover: () => `
    &:hover {
      background-color: #e0e0e0;
    }
    &:active {
      background-color: #bebdbd;
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

const letterSpacing = {
  default: "2px",
};

export const theme = {
  colors,
  fontSize,
  padding,
  margin,
  border,
  mixins,
  letterSpacing,
};

export type Theme = typeof theme;
