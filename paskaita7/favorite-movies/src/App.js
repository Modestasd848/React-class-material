import './App.css';
import React, { useState } from 'react';
import MovieList, { FavoritesContext } from './components/MovieList/MovieList';
import FavoriteList from './components/FavoriteList/FavoriteList';

function App() {
  const [favorites, setFavorites] = useState([]);
  return (
    <div>
      <FavoritesContext.Provider value={{ favorites, setFavorites }}>
        <MovieList />
        <FavoriteList />
      </FavoritesContext.Provider>
    </div>
  );
}

export default App;
