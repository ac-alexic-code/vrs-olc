export const routesMenu = {
  menu: "/menu",
  contact: "/contact",
  facebook: "https://www.facebook.com/veganramenshop",
  instagram: "https://www.instagram.com/veganramenshop",
} as const;

export const routesWolt = {
  finka:
    "https://wolt.com/en/pol/warsaw/restaurant/vegan-ramen-shop-finlandzka",
  muranow: "https://wolt.com/en/pol/warsaw/restaurant/vegan-ramen-shop-muranw",
  mokotow: "https://wolt.com/en/pol/warsaw/restaurant/vegan-ramen-shop-mokotow",
} as const;

export type RoutesMenu = keyof typeof routesMenu;
export type RoutesWolt = keyof typeof routesWolt;
