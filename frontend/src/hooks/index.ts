import { useQuery } from "react-query";

import { api } from "../services/api.ts";
import { MovieInterface } from "../types";

export function useMovies() {
  return useQuery("movies", async () => {
    const { data } = await api.get<MovieInterface[]>("/api/v1/movies");
    return data;
  });
}

export const useMovie = (imdbId: string) => {
  const getPostById = async () => {
    const { data } = await api.get<MovieInterface>(
      `/api/v1/movies/imdbId/${imdbId}`,
    );
    return data;
  };

  return useQuery(["movie", imdbId], () => getPostById(), {
    enabled: !!imdbId,
  });
};
