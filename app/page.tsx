import HomePageClient from "./HomePageClient";
import NewsContainer from "./components/News/NewsContainer";
import getNews, { IQueryParams } from "./lib/getNews";
import dummyData from "./constants/dummyData";

interface HomeProps {
  searchParams: IQueryParams;
}

export default async function Home({ searchParams }: HomeProps) {
  // const res = await getNews(searchParams);
  // const newsData = await res.json();
  // const articles = newsData.articles;

  return (
    <div className=" ml-2 mt-20 w-full h-auto flex justify-center items-center">
      <NewsContainer
        articles={dummyData.sort((a1, a2) => {
          if (a1.urlToImage && !a2.urlToImage) {
            return -1;
          }

          return 1;
        })}
      />
    </div>
  );
}
