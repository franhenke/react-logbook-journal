import React from 'react'

const BookmarkedJournal = ({ bookmark }) => {
  const { image, place, date, caption, entry } = bookmark
  return (
    <>
      <img src={image} alt="" />
      <p>{place}</p>
      <p>{date}</p>
      <p>{caption}</p>
      <p>{entry}</p>
    </>
  )
}
export default BookmarkedJournal
