import Hero from "../../components/hero";
import { MovieInterface } from "../../types";

type Props = {
  movies: MovieInterface[] | undefined;
  loading: boolean;
};

export default function Home({ movies, loading }: Props) {
  if (loading) return <p>Loading...</p>;
  return <Hero movies={movies} />;
}
