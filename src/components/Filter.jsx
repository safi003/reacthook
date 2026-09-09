import React from 'react'

export default function Filter({ titleFilter, ratingFilter, onFilterTitle, onFilterRating }) {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title..."
        value={titleFilter}
        onChange={(e) => onFilterTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Min rating"
        min="0"
        max="5"
        step="0.1"
        value={ratingFilter}
        onChange={(e) => onFilterRating(Number(e.target.value))}
      />
    </div>
  )
}
