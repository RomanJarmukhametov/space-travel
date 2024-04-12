import { Bellefair, Barlow } from "next/font/google";

export const bellefair = Bellefair({ weight: ["400"], subsets: ["latin"] });

export const barlow = Barlow({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
