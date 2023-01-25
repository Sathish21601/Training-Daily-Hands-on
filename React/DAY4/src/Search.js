import React, { useState } from "react";

const Search = ({ setMeals }) => {
  const [search, setSearch] = useState("");

  const handleOnChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSearch = () => {
    makeApiCall(search);
  };

  const makeApiCall = (searchInput) => {
    var searchUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;
    fetch(searchUrl)
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setMeals(jsonData.meals);
      });
  };
  return (
    <div>
      <div className="max-w-xs text-center container mx-auto mt-10">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="text"
          type="text"
          placeholder="Search"
          onChange={(event) => handleOnChange(event)}
          value={search}
        />
        <br />
        <br />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
