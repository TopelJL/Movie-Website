import React from "react";

const MovieDetails = ({ title, year, plot, cast }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>Year: {year}</p>
      <p>{plot}</p>
      <h3>Cast:</h3>
      <ul>
        {cast.map((actor) => (
          <li key={actor}>{actor}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieDetails;
