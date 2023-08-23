export interface IQueryParams {
  q?: string;
  category?: string;
}

const getNews = async (params: IQueryParams) => {
  const { q, category } = params;
  let res: Response;

  if (category) {
    res = await fetch(
      `https://newsapi.org/v2/top-headlines?${q}&${
        category && `category=${category}`
      }&language=en&apiKey=` + process.env.NEWS_API_KEY
    );
  } else {
    res = await fetch(
      `https://newsapi.org/v2/everything?q=${q}&language=en&apiKey=` + process.env.NEWS_API_KEY
    );
  }

  return res;
};

export default getNews;
