import React from 'react'

export default function City({city}) {
    console.log(city);
  return (
    <div>
      <h1> {city.main.temp} </h1>
    </div>
  )
}
