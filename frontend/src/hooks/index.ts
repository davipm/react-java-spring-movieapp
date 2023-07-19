import { useQuery } from "react-query";

import { api } from "../services/api.ts";
import { MovieInterface } from "../types";

export function useMovies() {
  return useQuery("posts", async () => {
    const { data } = await api.get<MovieInterface[]>("/api/v1/movies");
    return data;
  });
}
