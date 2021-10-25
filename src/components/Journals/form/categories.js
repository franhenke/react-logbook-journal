import React from 'react'

export default function CategoryTagsComponent({ handleCategory }) {
  const categories = ['Memory', 'Thoughts', 'Important', 'Random', 'Review']

  return (
    <>
      <div className="category">
        {categories.map((option) => (
          <label className="category__label" key={option}>
            <input
              className="category__input"
              type="radio"
              name="category"
              id={option}
              value={option}
              onChange={(event) => handleCategory(event)}
            />
            {option}
          </label>
        ))}
      </div>
    </>
  )
}
