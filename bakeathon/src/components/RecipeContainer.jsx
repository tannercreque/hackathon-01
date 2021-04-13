import React from 'react'
import RecipeCard from './RecipeCards'

const RecipeContainer = ({recipes}) => {
  const renderRecipeCards = () => recipes.map(recipe => {
    return <RecipeCard key={recipe.href} recipe={recipe} />
  })
  
  return (
    <div className="recipe-container">
      {renderRecipeCards()}
    </div>
  )
}

export default RecipeContainer
