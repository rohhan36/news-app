"use client";

import { Article } from "@/app/typings";
import NewsArticleItem from "./NewsArticleItem";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";

interface NewsContainerProps {
  articles: Article[];
}

const NewsContainer: React.FC<NewsContainerProps> = ({ articles }) => {
  const isGridView = useSelector((state: RootState) => state.view.isGridView);
  return (
    <div
      className={`p-10 grid grid-cols-1 h-auto gap-8 max-w-7xl"
      ${isGridView ? "lg:grid-cols-3 md:grid-cols-2" : "md:grid-cols-2"}
    `}>
      {articles.map((article) => (
        <NewsArticleItem aritcleData={article} key={Math.random()} />
      ))}
    </div>
  );
};
export default NewsContainer;
