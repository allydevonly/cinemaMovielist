import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, trailerLink }) => {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard
          key={movie.id} 
          title={movie.title}
          description={movie.description}
          posterURL={movie.posterURL}
          rating={movie.rating}
          trailerLink={movie.trailerLink || trailerLink} // Use movie trailerLink
        />
      ))}
    </div>
  );
}

export default MovieList;
