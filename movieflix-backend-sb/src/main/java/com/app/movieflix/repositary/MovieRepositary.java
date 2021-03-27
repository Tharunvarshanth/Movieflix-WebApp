package com.app.movieflix.repositary;

import com.app.movieflix.model.Movie;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MovieRepositary  extends MongoRepository<Movie,String> {

    Boolean existsByMovieName(String movieName);
    Movie findByMovieName(String movieName);
    Boolean existsBy_id(String _id);

    Movie findBy_id(String _id);
    List<Movie> findMoviesByMovieNameStartingWith(String text);
}
