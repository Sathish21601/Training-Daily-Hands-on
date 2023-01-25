import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  moviesReducer,
  movieReducer,
  recommendationsReducer,
  castAndCrewReducer,
  actorReducer,
  movieCreditsReducer,
  setBackdropReducer,
} from "./reducers/movie.reducer";

const rootReducer = combineReducers({
  movies: moviesReducer,
  movie: movieReducer,
  recommendations: recommendationsReducer,
  castAndCrew: castAndCrewReducer,
  actor: actorReducer,
  movie_credits: movieCreditsReducer,
  backdrop_img: setBackdropReducer,
});
const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
