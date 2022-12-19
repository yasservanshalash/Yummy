import React from 'react'
import Form from '../components/form/Form'
import Recipes from "../components/recipes/Recipes"
import { RecipeType } from '../App';

type PropTypes = {
    setUserInput: Function;
    recipes: RecipeType[];
}
const Recipe = ({setUserInput, recipes}: PropTypes) => {
  return (
    <div>
        <Form setUserInput={setUserInput} />
        <Recipes recipes={recipes} />
    </div>
  )
}

export default Recipe