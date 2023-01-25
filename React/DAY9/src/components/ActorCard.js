import React from "react";
import { Link } from "react-router-dom";

export default function ActorCard({ actor }) {
  return (
    <Link to={"/actor/" + actor.id}>
      <div className="shadow shadow-black w-64 relative h-96 ">
        <img
          src={"https://image.tmdb.org/t/p/w500/" + actor.profile_path}
          className="absolute top-0 left-0 w-full h-full"
          alt={actor.name}
        />
        <div className="w-full h-full opacity-0 hover:bg-black hover:opacity-80 transition-all duration-300 absolute flex flex-col p-10 text-white justify-between">
          <div className="text-center">{actor.character}</div>
          <div className="text-center">{actor.job}</div>
          <div className="text-center">{actor.known_for_department}</div>
          <div className="text-center text-lg font-bold">{actor.name}</div>
        </div>
      </div>
    </Link>
  );
}
