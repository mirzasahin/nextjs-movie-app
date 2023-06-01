'use client'
import React from 'react'

const Movies = ({dt}) => {
    console.log(dt);
  return (
    <div>{dt.title}</div>
  )
}

export default Movies