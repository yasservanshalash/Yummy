import React from "react";
import "./FavoriteItem.css";

type PropType = {
  name: string;
  category: string;
  image: string;
};
const FavoriteItem = ({ name, category, image }: PropType) => {
  return (
    <div className="favoriteItemStyle">
      <div className="info">
        <h1>{name}</h1>
        <h4>Category: {category}</h4>
      </div>
      <div className="image">
        <img src={image} />
      </div>
    </div>
  );
};

export default FavoriteItem;
