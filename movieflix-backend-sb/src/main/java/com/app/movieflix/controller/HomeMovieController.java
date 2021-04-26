package com.app.movieflix.controller;


import com.app.movieflix.model.Movie;
import com.app.movieflix.repositary.MovieRepositary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/home")
public class HomeMovieController {

    @Autowired
    MovieRepositary movieRepositary;

    public HomeMovieController( MovieRepositary _movieRepositary){
        this.movieRepositary = _movieRepositary;
    }

    @GetMapping("/getMoviesbygenere")
    public List<Movie> getMoviesByGeneres(@RequestParam("generetype")String generetype){
        System.out.println("Genere "+ generetype);
        List<Movie> movieList = movieRepositary.findMoviesByGenersIsContaining(generetype);

        return movieList;
    }

    @GetMapping("/getmoviebymoviename")
    public ResponseEntity<?> getmoviebymoviename(@RequestParam("name")String name){

        Movie movie2 = (movieRepositary.findByMovieName(name));
        if(movie2!=null){
            return ResponseEntity.ok(movie2);
        }else{
            return ResponseEntity.ok(null);
        }
    }


}
