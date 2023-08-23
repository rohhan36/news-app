import HomePageClient from "./HomePageClient";
import dummyData from "./constants/dummyData";

import getNews, { IQueryParams } from "./lib/getNews";

interface HomeProps {
  searchParams: IQueryParams;
}

export default async function Home({ searchParams }: HomeProps) {
  // const res = await getNews(searchParams);
  // const newsData = await res.json();
  // const articles = newsData.articles;

  return (
    <div className=" ml-2 mt-20 w-full h-auto flex justify-center items-center">
      <HomePageClient articles={dummyData} />
    </div>
  );
}
