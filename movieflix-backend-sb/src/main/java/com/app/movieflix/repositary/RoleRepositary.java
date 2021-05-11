package com.app.movieflix.repositary;

import com.app.movieflix.model.Role;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepositary extends MongoRepository<Role,String> {

    Role findByRole(String role);

}
