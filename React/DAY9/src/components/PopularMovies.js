import React from "react";
import { Link } from "react-router-dom";

export default function PopularMovies() {
  return (
    <div className="text-center">
      <Link to="/">
        <span className="bg-gray-600 text-green-500 font-serif px-2 py-1 rounded-sm text-xl">
          Popular Movies
        </span>
      </Link>
    </div>
  );
}
