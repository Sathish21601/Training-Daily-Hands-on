import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ActorCard from "../components/ActorCard";
import Logo from "../components/Logo";
import MovieCard from "../components/MovieCard";
import PopularMovies from "../components/PopularMovies";
import { getCastAndCrew, getMovie } from "../redux/actions/movie.action";
import { getRecommendations } from "../redux/actions/movie.action";

export default function MoviePage() {
  let { id } = useParams();
  let { movie, movie_loaded } = useSelector((state) => state.movie);
  let { recommendations, recommendations_loaded } = useSelector(
    (state) => state.recommendations
  );
  let { castAndCrew, castAndCrew_loaded } = useSelector(
    (state) => state.castAndCrew
  );
  let { backdrop_img } = useSelector((state) => state.backdrop_img);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovie(id));
  }, [id, movie_loaded]);

  useEffect(() => {
    dispatch(getRecommendations(id));
  }, [recommendations_loaded]);

  useEffect(() => {
    dispatch(getCastAndCrew(id));
  }, [castAndCrew_loaded]);

  let movie_backdrop = `https://image.tmdb.org/t/p/original${backdrop_img}`;

  // const background_style={
  //     backgroundImage: `url(${movie_backdrop})`,
  //     backgroundPosition: 'center',
  //     backgroundSize: 'cover',
  //     backgroundRepeat: 'no-repeat'
  //   }

  let movie_poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  // setCast(cast,director)
  // let{
  //  job:known_for_department,

  // }=director;

  let actors = [];
  actors = castAndCrew.cast?.slice(0, 5).map((member) => {
    return member;
  });

  let director = [];
  director = castAndCrew.crew?.find((member) => {
    return member.job == "Director";
  });

  return (
    <div className="flex flex-col relative bg-black bg-opacity-80 text-white ">
      <img
        src={movie_backdrop}
        alt=""
        className="min-w-screen min-h-screen fixed -z-10 "
      />
      <div className="flex flex-col">
        <Logo />
        <PopularMovies />
      </div>
      <div className="m-20 ml-40 flex">
        <section className="w-1/2">
          <img src={movie_poster} alt={movie.title} width="350px" />
        </section>

        <section className="pl-10 w-3/4 ">
          <h1 className="text-5xl pb-8">{movie.title}</h1>
          <section className="flex gap-5 pb-2">
            <div>{movie.release_date}</div>
            <div>{movie.vote_average}</div>
            <div>{movie.runtime}</div>
          </section>
          <section className="flex gap-4 pb-4">
            {movie.genres?.map((genre) => {
              return <span key={genre.id}>{genre.name}</span>;
            })}
          </section>
          <section>
            <span className="text-4xl pb-4 text-green-400">
              {movie.tagline}
            </span>
          </section>
          <section>
            <span className="">{movie.overview}</span>
          </section>
          <section>{/* Director: <span>{movie.}</span> */}</section>
        </section>
      </div>
      <div>
        <span className="ml-40 text-5xl mb-10 inline-block">
          Recommendations
        </span>
        <section className="flex flex-wrap mx-40 gap-5 box-border">
          {recommendations.results?.slice(0, 8).map((recommendation) => {
            return <MovieCard key={recommendation.id} movie={recommendation} />;
          })}
        </section>
      </div>
      <div>
        <span className="ml-40 text-5xl my-10 inline-block">Cast and Crew</span>
        <section className="flex flex-wrap  mx-40 gap-5 box-border">
          {director && <ActorCard actor={director} />}
          {actors &&
            actors?.map((actor) => {
              return <ActorCard actor={actor} key={actor.id} />;
            })}
        </section>
      </div>
    </div>
  );
}
