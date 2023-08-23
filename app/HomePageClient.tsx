"use client";

import React from "react";
import NewsContainer from "./components/News/NewsContainer";
import { Article } from "./typings";

interface HomePageClientProps {
  articles: Article[];
}

const HomePageClient: React.FC<HomePageClientProps> = ({ articles }) => {
  return (
    <NewsContainer
      articles={articles.sort((a1, a2) => {
        if (a1.urlToImage && !a2.urlToImage) {
          return -1;
        }
        return 1;
      })}
    />
  );
};
export default HomePageClient;
