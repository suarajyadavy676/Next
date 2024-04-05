import React from 'react'

function MyProfile({params}) {
  console.log(params)
  return (
    <div>
      <h1>Hello this is my profile {params}</h1>
    </div>
  )
}

export default MyProfile
