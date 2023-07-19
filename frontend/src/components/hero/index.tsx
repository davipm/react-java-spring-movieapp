import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

import { Movies } from "../../types";

import {
  MovieButtonContainer,
  MovieCard,
  MovieCardContainer,
  MovieCarouselContainer,
  MovieDetails,
  MoviePoster,
  MovieTitle,
  PLayButtonIcon,
  PlayButtonIconContainer,
} from "./styles";

export default function Hero({ movies }: Movies) {
  const navigate = useNavigate();

  function handleReviewNavigate(movieId: string) {
    navigate(`/reviews/${movieId}`);
  }

  return (
    <MovieCarouselContainer>
      <Carousel>
        {movies.map((movie) => (
          <Paper key={movie.imdbId}>
            <MovieCardContainer>
              <MovieCard img={movie.backdrops[0]}>
                <MovieDetails>
                  <MoviePoster>
                    <img src={movie.poster} alt={movie.title} />
                  </MoviePoster>
                  <MovieTitle>
                    <h4>{movie.title}</h4>
                  </MovieTitle>
                  <MovieButtonContainer>
                    <Link
                      to={`/trailer/${movie.trailerLink.substring(
                        movie.trailerLink.length - 11,
                      )}`}
                    >
                      <PlayButtonIconContainer>
                        <PLayButtonIcon
                          className="play-button-icon"
                          icon={faCirclePlay}
                        />
                      </PlayButtonIconContainer>
                    </Link>

                    <div>
                      <Button
                        variant="info"
                        onClick={() => handleReviewNavigate(movie.imdbId)}
                      >
                        Reviews
                      </Button>
                    </div>
                  </MovieButtonContainer>
                </MovieDetails>
              </MovieCard>
            </MovieCardContainer>
          </Paper>
        ))}
      </Carousel>
    </MovieCarouselContainer>
  );
}
