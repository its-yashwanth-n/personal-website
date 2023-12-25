import { Delicious_Handrawn, Francois_One, Oswald } from "next/font/google";

export const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600"],
  variable: "--font-primary",
});

export const francois = Francois_One({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--font-secondary",
});

export const handrawn = Delicious_Handrawn({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--font-logo",
});
