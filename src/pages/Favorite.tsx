import React from "react";
import FavoriteItem from "../components/favoriteItem/FavoriteItem";
import { RecipeType } from "../App";

type PropType = {
  favoriteList: RecipeType[];
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const Favorite = ({ favoriteList, setCount }: PropType) => {
  setCount(favoriteList.length);

  return (
    <div className="favorites">
      {favoriteList.length > 0 ? (
        favoriteList.map((item) => {
          return (
            <FavoriteItem
              name={item.strMeal}
              category={item.strCategory}
              image={item.strMealThumb}
            />
          );
        })
      ) : (
        <h1>No Items</h1>
      )}
    </div>
  );
};

export default Favorite;
