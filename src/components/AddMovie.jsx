import React, { useState } from 'react'

export default function AddMovie({ onAdd }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [posterURL, setPosterURL] = useState('')
  const [rating, setRating] = useState('')
  const [trailerURL , setTrailerURL ] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title || !description || !posterURL || !rating || !trailerURL ) return
    onAdd({ title, description, posterURL, rating: Number(rating), trailerURL })
    setTitle('')
    setDescription('')
    setPosterURL('')
    setRating('')
    setTrailerURL('')
  }

  return (
    <form className="add-movie" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="url"
        placeholder="Poster URL"
        value={posterURL}
        onChange={(e) => setPosterURL(e.target.value)}
      />
      <input
        type="number"
        placeholder="Rating"
        min="0"
        max="5"
        step="0.1"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <input
        type="url"
        placeholder="Trailer Embed URL (https://www.youtube.com/embed/...)"
        value={trailerURL}
        onChange={(e) => setTrailerURL(e.target.value)}
      />
      <button type="submit">Add Movie</button>
    </form>
  )
}
