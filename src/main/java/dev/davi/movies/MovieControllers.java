package dev.davi.movies;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/movies")
public class MovieControllers {
    @Autowired
    private MovieService service;
    @GetMapping
    public ResponseEntity<List<Movie>> getMovies() {
        return new ResponseEntity<List<Movie>>(service.findAllMovies(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Movie>> getSingleMovie(@PathVariable ObjectId id) {
        return new ResponseEntity<Optional<Movie>>(service.findMovieById(id), HttpStatus.OK);
    }

    @GetMapping("/imdbId/{imdbId}")
    public ResponseEntity<Optional<Movie>> getSingleMovieByImdbId(@PathVariable String imdbId) {
        return new ResponseEntity<Optional<Movie>>(service.findMovieByImdbId(imdbId), HttpStatus.OK);
    }
}
