import React from "react";
import "./App.css";

export default function Meals({ meals }) {
  console.log(meals);
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto flex justify-between flex-wrap">
        {meals.length > 0 && meals
          ? meals.map((newMeal) => {
              return (
                <div
                  className="max-w-sm rounded overflow-hidden shadow-lg"
                  key={newMeal.idMeal}
                >
                  <img
                    
                    src={newMeal.strMealThumb}
                    alt="Meals_Pic"
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                      {newMeal.strMeal}
                    </div>
                    <p className="text-base ellipsis text-white">
                      {newMeal.strCategory}
                    </p>
                  </div>
                </div>
              );
            })
          : "Loading..."}
      </div>
    </div>
  );
}
