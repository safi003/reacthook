import React from 'react'
import MovieCard from './MovieCard'

export default function MovieList({ movies }) {
  return (
    <div className="movie-list">
      {movies.length === 0 && <p>No movies found.</p>}
      {movies.map((movie, index) => (
        <MovieCard
          key={index}
          title={movie.title}
          description={movie.description}
          posterURL={movie.posterURL}
          rating={movie.rating}
          link
        />
      ))}
    </div>
  )
}
