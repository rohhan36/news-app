import { User } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { logInModalActions } from "../store/logInSlice";
import toast from "react-hot-toast";
import getUserData from "../lib/getUserData";
import getCurrentUserId from "../lib/getCurrentUserId";
import { useState } from "react";
import { RootState } from "../store";
import { ArticleData } from "../typings";

interface IUseFavorite {
  currentUser: User | null | undefined;
  favoriteURL: string;
}

const useFavorite = ({ currentUser, favoriteURL }: IUseFavorite) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(false);
  const currentArticle = useSelector((state: RootState) => state.article.currentArticle);

  const hasFavorited = async () => {
    try {
      let favorites: any;

      if (currentUser) {
        favorites = await getUserData(currentUser.uid);
      } else {
        favorites = { head: "" };
      }

      favorites.forEach((article: ArticleData) => {
        if (article.url === favoriteURL) setIsFavorite(true);
      });
    } catch (error) {
      console.log(error);
    }
  };

  hasFavorited();

  const toggleFavorite = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    if (!currentUser) {
      dispatch(logInModalActions.openLogInModal());
      return;
    }

    try {
      let request, added;
      const userID = await getCurrentUserId(currentUser.uid);

      const favorites = await getUserData(currentUser.uid);
      let newFavorites: string[];

      hasFavorited();

      if (isFavorite) {
        newFavorites = favorites.filter((article: ArticleData) => article.url !== favoriteURL);
        request = () =>
          fetch(
            `https://news-app-3ce7c-default-rtdb.firebaseio.com/user/${userID}/favorites.json`,
            {
              method: "PUT",
              body: JSON.stringify(newFavorites),
              headers: {
                "Content-type": "application/json",
              },
            }
          );
        added = false;
      } else {
        newFavorites = [...favorites, { url: favoriteURL, article: currentArticle }];
        request = () =>
          fetch(
            `https://news-app-3ce7c-default-rtdb.firebaseio.com/user/${userID}/favorites.json`,
            {
              method: "PUT",
              body: JSON.stringify(newFavorites),
              headers: {
                "Content-type": "application/json",
              },
            }
          );
        added = true;
      }

      await request();
      if (added) {
        toast.success("Added to favorites");
        setIsFavorite(true);
      } else {
        toast.success("Removed from favorites");
        setIsFavorite(false);
      }
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return {
    isFavorite,
    toggleFavorite,
  };
};
export default useFavorite;
