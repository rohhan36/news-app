"use client";

import { useSelector } from "react-redux";
import { RootState } from "../store";
const ArticleClient = () => {
  const articleData = useSelector((state: RootState) => state.article.currentArticle);
  const { source, author, content, description, title, url, urlToImage } = articleData;

  return (
    <div className="flex flex-col gap-5 max-w-4xl">
      {urlToImage && <img src={urlToImage} alt={title} className="h-96 object-contain" />}
      <div className="font-bold text-fuchsia-950 text-2xl">{title}</div>
      {"author" && <div className="font-bold text-fuchsia-950">Author : {author}</div>}
      {source.name && <div className="font-bold text-fuchsia-950">Source : {source.name}</div>}
      <div className="text-fuchsia-950">{description}</div>
      <div className="text-fuchsia-950">{content}</div>
      <a href={url} target="_blank" className="text-fuchsia-800 underline">
        Click here to read the full article...
      </a>
    </div>
  );
};
export default ArticleClient;
