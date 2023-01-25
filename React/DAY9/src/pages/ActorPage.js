import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getActor, getMovieCredits } from "../redux/actions/movie.action";
import MovieCard from "../components/MovieCard";
import Logo from "../components/Logo";
import PopularMovies from "../components/PopularMovies";

export default function ActorPage() {
  let { actor, actor_loaded } = useSelector((state) => state.actor);
  let { movie_credits, movie_credits_loaded } = useSelector(
    (state) => state.movie_credits
  );
  let { backdrop_img } = useSelector((state) => state.backdrop_img);

  let { id } = useParams();
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActor(id));
  }, [actor_loaded]);

  useEffect(() => {
    dispatch(getMovieCredits(id));
  }, [movie_credits_loaded]);

  let actor_poster = `https://image.tmdb.org/t/p/w500/${actor.profile_path}`;
  let movie_backdrop = `https://image.tmdb.org/t/p/original${backdrop_img}`;
  return (
    <div className="flex flex-col relative bg-black bg-opacity-80 text-white ">
      <img
        src={movie_backdrop}
        alt=""
        className="min-w-screen min-h-screen fixed -z-10 "
      />
      <div>
        <Logo />
        <PopularMovies />
      </div>
      <div className="m-20 ml-40 flex">
        <section className="w-1/2">
          <img src={actor_poster} alt={actor.name} width="350px" />
        </section>

        <section className="pl-10 w-3/4 ">
          <h1 className="text-5xl pb-8">{actor.name}</h1>

          <section>
            <span className="">{actor.biography}</span>
          </section>
        </section>
      </div>
      <section className="flex flex-wrap mx-40 gap-20">
        {movie_credits.cast?.slice(0, 8).map((movie) => {
          return <MovieCard movie={movie} key={movie.id} />;
        })}
      </section>
    </div>
  );
}
