import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FavoritesState {
  favorites: string[];
  addFavorite: (shaderId: string) => void;
  removeFavorite: (shaderId: string) => void;
  isFavorite: (shaderId: string) => boolean;
  toggleFavorite: (shaderId: string) => void;
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],
      addFavorite: (shaderId) =>
        set((state) => ({
          favorites: [...new Set([...state.favorites, shaderId])],
        })),
      removeFavorite: (shaderId) =>
        set((state) => ({
          favorites: state.favorites.filter((id) => id !== shaderId),
        })),
      isFavorite: (shaderId) => get().favorites.includes(shaderId),
      toggleFavorite: (shaderId) => {
        const { isFavorite, addFavorite, removeFavorite } = get();
        if (isFavorite(shaderId)) {
          removeFavorite(shaderId);
        } else {
          addFavorite(shaderId);
        }
      },
    }),
    {
      name: "lumina-favorites",
    },
  ),
);
