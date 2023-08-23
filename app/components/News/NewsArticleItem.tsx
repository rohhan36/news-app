"use client";

import { Article } from "../../typings";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import DateBlock from "../UI/DateBlock";

interface NewsArticleItemProps {
  aritcleData: Article;
}

const NewsArticleItem: React.FC<NewsArticleItemProps> = ({ aritcleData }) => {
  const { source, author, title, description, url, urlToImage, publishedAt, content } = aritcleData;
  const isGridView = useSelector((state: RootState) => state.view.isGridView);

  return (
    <div
      className={`p-4 shadow-lg rounded-lg flex flex-col gap-4 hover:scale-[1.02] transition-all duration-200 cursor-pointer relative 
      ${!urlToImage && "pt-20"}`}>
      <DateBlock date={publishedAt} />
      {urlToImage && (
        <img src={urlToImage} alt={title} className="sm:h-60 h-50 object-cover rounded-xl" />
      )}
      <div className="font-semibold text-fuchsia-950">{title}</div>
      <div className={` text-fuchsia-950 hidden ${isGridView ? "sm:hidden" : "sm:block "}`}>
        {content}
      </div>
    </div>
  );
};
export default NewsArticleItem;
