import { Article } from "@/app/typings";
import NewsArticleItem from "./NewsArticleItem";

interface NewsContainerProps {
  articles: Article[];
}

const NewsContainer: React.FC<NewsContainerProps> = ({ articles }) => {
  return (
    <div className="p-10 grid grid-cols-2 h-auto gap-8 max-w-7xl">
      {articles.map((article) => (
        <NewsArticleItem aritcleData={article} key={Math.random()} />
      ))}
    </div>
  );
};
export default NewsContainer;
