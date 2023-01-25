import Search from "./Search.js";
import "./App.css";
import Meals from "./Meals";
import { useEffect, useState } from "react";


function App() {
  const [meals, setMeals] = useState([]);
  const apiUrl = "https://www.themealdb.com/api/json/v1/1/random.php";
  useEffect(() => {
    fetch(apiUrl)
      .then((results) => results.json())
      .then((data) => {
        setMeals(data.meals);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-center text-7xl text-red-600">
        Meal App
      </h1>
      <Search setMeals={setMeals} />
      <br />
      {meals && <Meals meals={meals} />}
    </div>
  );
}

export default App;
