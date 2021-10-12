import React from 'react'

export default function CategoryTagsComponent({ handleCategory }) {
  const categories = ['Memory', 'Thoughts', 'Important', 'Random', 'Review']

  return (
    <>
      <h4>
        Category <span className="required">*</span>
      </h4>
      <div className="category">
        {categories.map((option) => (
          <label className="category__label">
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
