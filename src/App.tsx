import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import Favorite from "./pages/Favorite";
import Contact from "./pages/Contact";
import "./App.css";

export type RecipeType = {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strInstructions: string;
  strMealThumb: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
};
function App() {
  const [userInput, setUserInput] = useState<string>("");
  const [recipes, setRecipes] = useState<RecipeType[]>([]);
  const [favoriteList, setFavoriteList] = useState<RecipeType[]>([]);
  const [count, setCount] = useState(0);
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${userInput}`;

  const fetchData = (url: string) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setRecipes(data.meals));
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  useEffect(() => {
    const uniqueIds: any[] = [];
    setFavoriteList(
      favoriteList.filter((element) => {
        const isDuplicate = uniqueIds.includes(element.idMeal);
        if (!isDuplicate) {
          uniqueIds.push(element.idMeal);
          return true;
        }
        return false;
      })
    );
    setCount(favoriteList.length);
  }, [favoriteList]);

  return (
    <div className="App">
      <NavBar count={count} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/recipe"
          element={
            <Recipe
              setUserInput={setUserInput}
              recipes={recipes}
              favoriteList={favoriteList}
              setFavoriteList={setFavoriteList}
            />
          }
        />
        <Route
          path="/favorite"
          element={<Favorite favoriteList={favoriteList} setCount={setCount} />}
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
