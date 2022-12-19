import React from "react";
import Form from "../components/form/Form";
import Recipes from "../components/recipes/Recipes";
import { RecipeType } from "../App";

type PropTypes = {
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
  recipes: RecipeType[];
  favoriteList: RecipeType[];
  setFavoriteList: React.Dispatch<React.SetStateAction<RecipeType[]>>;
};
const Recipe = ({
  setUserInput,
  recipes,
  favoriteList,
  setFavoriteList,
}: PropTypes) => {
  return (
    <div className="recipePage">
      <Form setUserInput={setUserInput} />
      <Recipes
        recipes={recipes}
        favoriteList={favoriteList}
        setFavoriteList={setFavoriteList}
      />
    </div>
  );
};

export default Recipe;
