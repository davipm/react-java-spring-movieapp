import { Routes, Route } from "react-router-dom";

import { useMovies } from "./hooks";
import Header from "./components/header";
import Home from "./pages/home";
import Trailer from "./pages/trailer";
import Reviews from "./pages/reviews";
import NotFound from "./pages/notFound";

import GlobalStyle from "./styles/global.ts";

export default function App() {
  const { data, isLoading } = useMovies();

  return (
    <div className="app">
      <Header />

      <Routes>
        <Route index element={<Home movies={data} loading={isLoading} />} />
        <Route path="trailer/:ytTrailerId" element={<Trailer />} />
        <Route path="reviews/:movieId" element={<Reviews />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <GlobalStyle />
    </div>
  );
}
