import Hero from "../../components/hero";
import { Movies } from "../../types";

export default function Home({ movies }: Movies) {
  return <Hero movies={movies} />;
}
