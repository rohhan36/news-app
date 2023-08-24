import { useSelector } from "react-redux";
import { ArticleData } from "../typings";
import { RootState } from "../store";
import NewsArticleItem from "../components/News/NewsArticleItem";
import EmptyState from "../components/EmptyState";

interface FavoritesClientProps {
  favorites: ArticleData[];
}

const FavoritesClient: React.FC<FavoritesClientProps> = ({ favorites }) => {
  const isGridView = useSelector((state: RootState) => state.view.isGridView);

  if (favorites.length <= 1) {
    return (
      <EmptyState
        title="No Favorites"
        subtitle="Looks like you don't have any favorite articles yet!"
      />
    );
  }
  return (
    <div
      className={`p-10 grid grid-cols-1 h-auto gap-8 max-w-7xl
      ${isGridView ? "lg:grid-cols-3 md:grid-cols-2" : "md:grid-cols-2"}
    `}>
      {favorites.map(
        (favorite) =>
          favorite !== "head" && (
            <NewsArticleItem articleData={favorite.article} key={Math.random()} />
          )
      )}
    </div>
  );
};
export default FavoritesClient;
