import HomePageClient from "./HomePageClient";
import EmptyState from "./components/EmptyState";

import getNews, { IQueryParams } from "./lib/getNews";

interface HomeProps {
  searchParams: IQueryParams;
}

export default async function Home({ searchParams }: HomeProps) {
  const res = await getNews(searchParams);
  const newsData = await res.json();
  const articles = newsData.articles;

  if (articles.length === 0) {
    return <EmptyState title="Uh Oh!" subtitle="It seems there are no articles for your search!" />;
  }

  return (
    <div className=" ml-2 mt-20 w-full h-auto flex justify-center items-center">
      <HomePageClient articles={articles} />
    </div>
  );
}
