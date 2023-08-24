"use client";

import { useState } from "react";
import GetCurrentUser from "../lib/getCurrentUser";
import getUserData from "../lib/getUserData";
import FavoritesClient from "./FavoritesClient";

const FavoritesPage = () => {
  const currentUser = GetCurrentUser();
  const [favorites, setFavorites] = useState([]);

  const getFavorites = async () => {
    let favoriteArticles = [];
    if (currentUser) {
      favoriteArticles = await getUserData(currentUser.uid);
    }
    setFavorites(favoriteArticles);
  };

  return (
    <div className="ml-2 mt-20">
      <FavoritesClient />
    </div>
  );
};

export default FavoritesPage;
