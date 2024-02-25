import React from 'react';

const MovieCard = ({ title, description, posterURL, rating, trailerLink }) => {
  return (
    <div className="movie-card">
      <img src={posterURL} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Rating: {rating}</p>
      <div className="trailer">
      <iframe
        title={title}
        width="560"
        height="315"
        src={trailerLink} // Make sure trailerLink is used correctly
        frameBorder="1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      </div>
    </div>
  );
}

export default MovieCard;
