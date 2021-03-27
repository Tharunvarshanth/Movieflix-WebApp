package com.app.movieflix.repositary;

import com.app.movieflix.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepositary extends MongoRepository<User,String> {


    Boolean existsUserByUsername(String username);

    User findUserByUsernameAndPassword(String username,String password);

    User findUserByUsername(String username);
}
