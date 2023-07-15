export const forDesktop = (content: string) => `
  @media screen and (min-width: 601px) {
    ${content}
  }
`;
