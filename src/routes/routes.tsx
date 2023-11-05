export const routes = {
  facebook: "https://www.facebook.com/veganramenshop",
  instagram: "https://www.instagram.com/veganramenshop",
  finka:
    "https://wolt.com/en/pol/warsaw/restaurant/vegan-ramen-shop-finlandzka",
  muranow: "https://wolt.com/en/pol/warsaw/restaurant/vegan-ramen-shop-muranw",
  mokotow: "https://wolt.com/en/pol/warsaw/restaurant/vegan-ramen-shop-mokotow",
} as const;

export type Routes = keyof typeof routes;
