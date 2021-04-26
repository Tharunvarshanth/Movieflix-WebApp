package com.app.movieflix.repositary;

import com.app.movieflix.model.InputSelectList;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InputSelectListRepositary extends MongoRepository<InputSelectList,String> {


}
