package com.app.movieflix.repositary;


import com.app.movieflix.model.MovieAndTmdb;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MovieAndTmdbRepositary extends MongoRepository<MovieAndTmdb,String> {

    MovieAndTmdb findByMovieId(String movieId);
}
