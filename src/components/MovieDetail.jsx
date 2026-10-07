import React from 'react'
import { useParams, Link } from 'react-router-dom'

export default function MovieDetail({ movies }) {
  const { id } = useParams()
  const movie = movies.find((m) => String(m.id) === String(id))

  if (!movie) {
    return (
      <div>
        <h2>Movie not found</h2>
        <Link to="/">Back to Home</Link>
      </div>
    )
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailerURL}
        title={`${movie.title} trailer`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <br />
      <Link to="/">Back to Home</Link>
    </div>
  )
}