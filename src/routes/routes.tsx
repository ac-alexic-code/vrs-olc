export const routes = {
  facebook: "https://www.facebook.com/veganramenshop",
  instagram: "https://www.instagram.com/veganramenshop",
} as const;

export type Routes = keyof typeof routes;
