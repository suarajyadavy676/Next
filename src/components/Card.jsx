import React from 'react'

function Card({title,year}) {
  return (
    <div className='border-2 border-red-400'>
      <h1>title:{title}</h1>
      <h1>year:{year}</h1>
    </div>
  )
}

export default Card
