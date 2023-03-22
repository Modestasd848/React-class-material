import React, { useContext } from 'react';
import { FavoritesContext } from '../MovieList/MovieList';

export default function FavoriteList() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div>
      <h2>Favorite List</h2>
      {favorites.map((movie) => {
        return <p key={movie.id}>{movie.title}</p>;
      })}
    </div>
  );
}
