import React from "react";
import Form from "../components/form/Form";
import Recipes from "../components/recipes/Recipes";
import { RecipeType } from "../App";

type PropTypes = {
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
  recipes: RecipeType[];
};
const Recipe = ({ setUserInput, recipes }: PropTypes) => {
  return (
    <div className="recipePage">
      <Form setUserInput={setUserInput} />
      <Recipes recipes={recipes} />
    </div>
  );
};

export default Recipe;
