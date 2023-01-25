import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <Link to={"/movie/" + movie.id}>
      <div className="shadow shadow-black w-64 relative h-96 ">
        <img
          src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
          className="absolute top-0 left-0 w-full h-full"
          alt={movie.original_title}
        />
        <div className="w-full h-full opacity-0 hover:bg-black hover:opacity-80 transition-all duration-300 absolute flex flex-col p-10 text-white justify-between">
          <div className="text-center">{movie.release_date}</div>
          <div className="text-center text-lg font-bold">
            {movie.original_title}
          </div>
          <div className="text-center">{movie.vote_average}</div>
        </div>
      </div>
    </Link>
  );
}
