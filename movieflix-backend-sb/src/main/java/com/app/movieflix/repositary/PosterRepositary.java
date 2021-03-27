package com.app.movieflix.repositary;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PosterRepositary extends MongoRepository<PosterRepositary,String> {
}
