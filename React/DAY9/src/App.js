import React from "react";
import { Route, Routes } from "react-router-dom";
import ActorPage from "./pages/ActorPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";

export default function App() {
  return (
    <div>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/:page" element={<HomePage />} />
        <Route path="movie/:id" element={<MoviePage />} />
        <Route path="actor/:id" element={<ActorPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
