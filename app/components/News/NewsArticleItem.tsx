"use client";

import { Article } from "../../typings";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import DateBlock from "../UI/DateBlock";
import { useRouter } from "next/navigation";

interface NewsArticleItemProps {
  articleData: Article;
}

const NewsArticleItem: React.FC<NewsArticleItemProps> = ({ articleData }) => {
  const { title, description, urlToImage, publishedAt } = articleData;
  const isGridView = useSelector((state: RootState) => state.view.isGridView);
  const router = useRouter();

  const generateURL = (articleData: Article) => {
    let URL = "/article?";

    console.log(articleData.source.name);
    for (let key in articleData) {
      URL += `${key}=${articleData[key] || ""}&`;
    }

    return URL;
  };

  const clickHandler = () => {
    const URL = generateURL(articleData);
    router.push(URL);
  };

  return (
    <div
      onClick={clickHandler}
      className={`p-4 shadow-lg rounded-lg flex flex-col gap-4 hover:scale-[1.02] transition-all duration-200 cursor-pointer relative 
      ${!urlToImage && "pt-20"}`}>
      <DateBlock date={publishedAt} />
      {urlToImage && (
        <img src={urlToImage} alt={title} className="sm:h-60 h-50 object-cover rounded-xl" />
      )}
      <div className="font-semibold text-fuchsia-950">{title}</div>
      <div className={` text-fuchsia-950 hidden ${isGridView ? "sm:hidden" : "sm:block "}`}>
        {description}
      </div>
    </div>
  );
};
export default NewsArticleItem;
