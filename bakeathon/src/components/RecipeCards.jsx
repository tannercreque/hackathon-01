//rafce
import React from 'react'

const RecipeCards = ({recipe}) => {
  const {ingredients, href, title} = recipe

  return (
    <div className="recipe-card">
      <h1>{title}</h1>
      <p>{ingredients}</p>
      <a href={href}>recipe link</a>
    </div>
  )
}

export default RecipeCards
