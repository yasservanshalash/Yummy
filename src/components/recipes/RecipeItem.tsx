import React from 'react'
import "./RecipeItem.css"
import { RecipeType } from '../../App'

type PropType = {
  recipe: RecipeType;
}
const RecipeItem = ({recipe} : PropType) => {
  return (
    <div>{recipe.strMeal}</div>
  )
}

export default RecipeItem