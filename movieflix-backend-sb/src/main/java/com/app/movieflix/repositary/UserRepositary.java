package com.app.movieflix.repositary;

import com.app.movieflix.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepositary extends MongoRepository<User,String> {

    List<User> findUsersByUsernameOrNameStartingWith(String name);
    Boolean  existsByUsernameOrNameStartingWith(String name);
    List<User> findUsersByUsernameStartingWith(String text);
    List<User> findUsersByNameStartingWith(String text);

    Boolean existsUserByUsername(String username);

    User findUserByUsernameAndPassword(String username,String password);

    User findUserByUsername(String username);
}
