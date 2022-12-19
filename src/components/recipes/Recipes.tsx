import React from "react";
import RecipeItem from "./RecipeItem";
import "./Recipes.css";
import { RecipeType } from "../../App";

type PropType = {
  recipes: RecipeType[];
  favoriteList: RecipeType[];
  setFavoriteList: React.Dispatch<React.SetStateAction<RecipeType[]>>;
};
const Recipes = ({ recipes, favoriteList, setFavoriteList }: PropType) => {
  return (
    <div className="meals">
      {recipes ? (
        recipes.map((recipe) => {
          return (
            <RecipeItem
              key={recipe.idMeal}
              recipe={recipe}
              favoriteList={favoriteList}
              setFavoriteList={setFavoriteList}
            />
          );
        })
      ) : (
        <h1 className="sorry">Sorry we have not got this recipe yet!</h1>
      )}
    </div>
  );
};

export default Recipes;
