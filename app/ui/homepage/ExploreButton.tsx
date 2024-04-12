import React from "react";
import Link from "next/link";
import { bellefair } from "@/app/ui/styles/fonts";
import styles from "./ExploreButton.module.css";

const ExploreButton: React.FC = () => {
  return (
    <Link
      href="/destination"
      className={`${bellefair.className} ${styles.exploreButton}`}>
      Explore
    </Link>
  );
};

export default ExploreButton;
