"use client";

import { useSearchParams } from "next/navigation";
const ArticleClient = () => {
  const params = useSearchParams();
  const author = params.get("author")?.replace("%20", " ");
  const title = params.get("title")?.replace("%20", " ");
  const description = params.get("description")?.replace("%20", " ");
  const url = params.get("url")?.replace("%20", " ");
  const imageSrc = params.get("urlToImage")?.replace("%20", " ");
  const content = params.get("content")?.replace("%20", " ");

  return (
    <div className="flex flex-col gap-5 max-w-4xl">
      {imageSrc && <img src={imageSrc} alt={title} className="h-96 object-contain" />}
      <div className="font-bold text-fuchsia-950 text-2xl">{title}</div>
      {author && <div className="font-bold text-fuchsia-950">Author : {author}</div>}
      <div className="text-fuchsia-950">{description}</div>
      <div className="text-fuchsia-950">{content}</div>
      <a href={url} target="_blank" className="text-fuchsia-800 underline">
        Click here to read the full article...
      </a>
    </div>
  );
};
export default ArticleClient;
