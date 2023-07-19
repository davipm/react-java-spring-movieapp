import { Routes, Route } from "react-router-dom";

import Header from "./components/header";
import { GlobalStyle } from "./styles/global.ts";
import Home from "./pages/home";
import Trailer from "./pages/trailer";
import Reviews from "./pages/reviews";
import NotFound from "./pages/notFound";
import { SetStateAction, useEffect, useState } from "react";
import { api } from "./services/api.ts";
import { MovieInterface } from "./types";

export default function App() {
  const [movies, setMovies] = useState<MovieInterface[]>([]);
  // const [movie, setMovie] = useState();
  // const [reviews, setReviews] = useState([]);

  async function getMovies() {
    try {
      const response = await api.get<SetStateAction<MovieInterface[]>>(
        "/api/v1/movies",
      );
      setMovies(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="app">
      <Header />

      <Routes>
        <Route index element={<Home movies={movies} />} />
        <Route path="trailer/:ytTrailerId" element={<Trailer />} />
        <Route path="reviews/:movieId" element={<Reviews />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <GlobalStyle />
    </div>
  );
}
