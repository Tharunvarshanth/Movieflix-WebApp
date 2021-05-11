package com.app.movieflix.repositary.tmdb;


import com.app.movieflix.model.tmdb.MovieAndTmdb;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MovieAndTmdbRepositary extends MongoRepository<MovieAndTmdb,String> {

    MovieAndTmdb findByMovieId(String movieId);
}
