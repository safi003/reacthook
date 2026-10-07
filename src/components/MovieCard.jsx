import React from 'react'

export default function MovieCard({ title, description, posterURL, rating }) {
  return (
    <div className="movie-card">
      <img src={posterURL} alt={title} className="movie-poster" width="100" />
      <div className="movie-info">
        <h2>{title}</h2>
        <p className="movie-description">{description}</p>
        <p className="movie-rating">Rating: {rating} / 5</p>
        <link rel="stylesheet" href="" />
      </div>
    </div>
  )
}
