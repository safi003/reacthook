import React, { useState } from 'react'
import Filter from './components/Filter'
import MovieList from './components/MovieList'
import AddMovie from './components/AddMovie'

const initialMovies = [
  {
    title: 'Inception',
    description: 'A thief who steals corporate secrets through dream-sharing technology.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg',
    rating: 5,
  },
  {
    title: 'The Dark Knight',
    description: 'Batman faces the Joker, a criminal mastermind who plunges Gotham into anarchy.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
    rating: 5,
  },
  {
    title: 'Interstellar',
    description: 'A team of explorers travel through a wormhole in space to ensure humanitys survival.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00YzA1LTk2NWYtZmM1ZThkMjRhNjViXkEyXkFqcGc@._V1_.jpg',
    rating: 4.5,
  },
]

export default function App() {
  const [movies, setMovies] = useState(initialMovies)
  const [titleFilter, setTitleFilter] = useState('')
  const [ratingFilter, setRatingFilter] = useState(0)

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie])
  }

  const filteredMovies = movies.filter((movie) => {
    const matchesTitle = movie.title.toLowerCase().includes(titleFilter.toLowerCase())
    const matchesRating = movie.rating >= ratingFilter
    return matchesTitle && matchesRating
  })

  return (
    <div>
      <h1>My Movie App</h1>
      <AddMovie onAdd={addMovie} />
      <Filter
        titleFilter={titleFilter}
        ratingFilter={ratingFilter}
        onFilterTitle={setTitleFilter}
        onFilterRating={setRatingFilter}
      />
      <MovieList movies={filteredMovies} />
    </div>
  )
}
