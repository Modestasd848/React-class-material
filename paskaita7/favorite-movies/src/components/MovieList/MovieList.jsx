import React, { useState } from 'react';
// import { TitleContext, DirectorContext } from '../../App';

const movieList = [
  { id: 1, title: 'Spider-Man: No Way Home', director: 'Jon Watts' },
  { id: 2, title: 'Black Panther: Wakanda Forever', director: 'Ryan Coogler' },
  { id: 3, title: 'Doctor Strange in the Multiverse of Madness', director: 'Sam Raimi' },
  { id: 4, title: 'Ant-Man and the Wasp: Quantumania', director: 'Peyton Reed' },
  { id: 5, title: 'Guardians of the Galaxy Vol. 3', director: 'James Gunn' },
  { id: 6, title: 'Blade', director: 'Bassam Tariq' },
  { id: 7, title: 'Deadpool 3', director: 'David Leitch' },
  { id: 8, title: 'The Fantastic Four', director: 'Jon Watts' },
];

export const FavoritesContext = React.createContext();

export default function MovieList() {
  const [favorites, setFavorites] = useState([]);

  function addToFavorites(index) {
    const newFavorites = [...favorites];
    newFavorites.push(movieList[index]);
    setFavorites(newFavorites);
  }
  return (
    <div>
      <h2>Movie List</h2>
      {movieList.map((movie, index) => {
        return (
          <div key={movie.id}>
            <p>{movie.director}</p>
            <h2>{movie.title}</h2>

            <button index={index} onClick={addToFavorites}>
              Add to Favorite
            </button>
          </div>
        );
      })}
    </div>
  );
}
