interface ReviewInterface {
  id: string;
  body: string;
  created: string;
  update: string;
}

export interface MovieInterface {
  id: string;
  imdbId: string;
  poster: string;
  title: string;
  releaseDate: string;
  trailerLink: string;
  genres: string[];
  backdrops: string[];
  reviewIds: ReviewInterface[];
}

export interface Movies {
  movies: MovieInterface[];
}
