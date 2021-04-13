//rafce
import React from 'react'

const RecipeCards = ({recipe}) => {
  const {ingredients, href, thumbnail, title} = recipe

  return (
    <div className="recipe-card">
      <h1>{title}</h1>
      <p>{ingredients}</p>
      <div className='image-container'>
        <img src={thumbnail} alt="food pic"/>
      </div>
      <div className='button-cont'>
        <button><a href={href}>Recipe Link</a></button>
      </div>
    </div>
  )
}

export default RecipeCards
