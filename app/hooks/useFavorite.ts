import { User } from "firebase/auth";

interface IUseFavorite {
  user: User;
  favoriteURL: string;
}

const useFavorite = ({ user, favoriteURL }: IUseFavorite) => {
  const hasFavorited = async () => {};
};
export default useFavorite;
