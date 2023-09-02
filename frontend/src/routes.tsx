import { Routes as Container, Route } from "react-router-dom";

import { useMovies } from "./hooks";
import Home from "./pages/home";
import Trailer from "./pages/trailer";
import Reviews from "./pages/reviews";
import NotFound from "./pages/notFound";

export default function Routes() {
  const { data, isLoading } = useMovies();

  return (
    <Container>
      <Route index element={<Home movies={data} loading={isLoading} />} />
      <Route path="trailer/:ytTrailerId" element={<Trailer />} />
      <Route path="reviews/:movieId" element={<Reviews />} />
      <Route path="*" element={<NotFound />} />
    </Container>
  );
}
