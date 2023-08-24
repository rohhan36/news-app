"use client";
import useFavorite from "@/app/hooks/useFavorite";
import GetCurrentUser from "@/app/lib/getCurrentUser";
import { RootState } from "@/app/store";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useSelector } from "react-redux";

const HeartButton = () => {
  const articleURL = useSelector((state: RootState) => state.article.currentArticle.url);
  const currentUser = GetCurrentUser();

  const { isFavorite, toggleFavorite } = useFavorite({ currentUser, favoriteURL: articleURL });
  return (
    <div>
      <button
        onClick={(e) => toggleFavorite(e)}
        className="h-8 p-2 rounded-md bg-neutral-200 flex gap-2 justify-center items-center active:scale-95">
        {isFavorite ? (
          <AiFillHeart className="text-2xl  text-rose-600" />
        ) : (
          <AiOutlineHeart className="text-2xl  text-rose-600" />
        )}
        <div className="font-semibold">
          {isFavorite ? "Remove from favorites" : "Add to favorites"}
        </div>
      </button>
    </div>
  );
};
export default HeartButton;
