import React from "react";
import "./Home.css";
import shrimp from "../assets/shrimp.avif";
import salad from "../assets/salad.avif";
import pizza from "../assets/pizza.webp";
import cake from "../assets/cake.avif";
import chicken from "../assets/chicken.avif";

const Home = () => {
  const imgs = [shrimp, salad, pizza, cake, chicken];
  return (
    <div>
      <div className="header">
        <p className="header__title">HEALTHY DELICIOUS RECIPES</p>
      </div>
      <div className="popularFood">
        <p className="popularFood__title">Popular Food</p>
        <p className="popularFood__paragraph">
          We provide a variety of food and beverage recipes with high taste from
          famous chefs.
        </p>
      </div>
      <div className="popularFoodImages">
        {
            imgs.map((img) => {
                return <img src={img} />
            })
        }
      </div>
    </div>
  );
};

export default Home;