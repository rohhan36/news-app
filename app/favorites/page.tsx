"use client";

import { useState, useEffect } from "react";
import GetCurrentUser from "../lib/getCurrentUser";
import getUserData from "../lib/getUserData";
import FavoritesClient from "./FavoritesClient";
import EmptyState from "../components/EmptyState";

const FavoritesPage = () => {
  const currentUser = GetCurrentUser();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const getFavorites = async () => {
      let favoriteArticles = [];
      if (currentUser) {
        favoriteArticles = await getUserData(currentUser.uid);
      }
      setFavorites(favoriteArticles);
    };
    getFavorites();
  }, [currentUser]);

  if (!currentUser) {
    return <EmptyState title="Unauthorised" subtitle="You are not allowed to access this page" />;
  }

  return (
    <div className="ml-2 mt-20 w-full h-[100vh] flex justify-center items-start">
      <FavoritesClient favorites={favorites} />
    </div>
  );
};

export default FavoritesPage;
