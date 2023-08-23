"use client";

import Image from "next/image";
import { Article } from "../../typings";

interface NewsArticleItemProps {
  aritcleData: Article;
}

const NewsArticleItem: React.FC<NewsArticleItemProps> = ({ aritcleData }) => {
  const { source, author, title, description, url, urlToImage, publishedAt, content } = aritcleData;
  return (
    <div className="p-6 shadow-lg rounded-lg flex flex-col gap-4 hover:scale-[1.02]">
      {urlToImage && <img src={urlToImage} alt={title} className="h-60 object-cover rounded-xl" />}
      <div>{title}</div>
    </div>
  );
};
export default NewsArticleItem;
