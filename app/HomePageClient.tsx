"use client";

import React from "react";
import NewsContainer from "./components/News/NewsContainer";
import { Article } from "./typings";
import { Provider } from "react-redux";
import store from "@/app/store/index";

interface HomePageClientProps {
  articles: Article[];
}

const HomePageClient: React.FC<HomePageClientProps> = ({ articles }) => {
  return (
    <Provider store={store}>
      <NewsContainer
        articles={articles.sort((a1, a2) => {
          if (a1.urlToImage && !a2.urlToImage) {
            return -1;
          }

          return 1;
        })}
      />
    </Provider>
  );
};
export default HomePageClient;
