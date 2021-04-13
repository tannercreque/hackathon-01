import React from 'react'
import RecipeCard from './RecipeCards'

const RecipeContainer = ({recipes}) => {
  const renderRecipeCards = () => recipes.map(recipe => {
    return <RecipeCard recipe={recipe} />
  })
  
  return (
    <div>
      <h1>Recipes</h1>
      {renderRecipeCards()}
    </div>
  )
}

export default RecipeContainer
