package com.app.movieflix.repositary;

import com.app.movieflix.model.UserTmdbLikeMovie;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserTmdbLikedMovieRepositary extends MongoRepository<UserTmdbLikeMovie,String> {




    List<UserTmdbLikeMovie> findAllByUserId(String username) ;


}
