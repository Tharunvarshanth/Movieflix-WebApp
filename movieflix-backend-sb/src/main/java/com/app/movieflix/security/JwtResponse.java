package com.app.movieflix.security;

import com.app.movieflix.model.Role;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;


public class JwtResponse  implements Serializable {

    private static final long serialVersionUID = -8091879091924046844L;
    private final String jwttoken;
    private final String username;
    private final String name;
    private final String role;

    public String getName() {
        return name;
    }

    public String getRole() {
        return role;
    }



    public String getUsername() {
        return username;
    }

    public JwtResponse(String jwttoken, String username, String name, String role) {
        this.jwttoken = jwttoken;
        this.username = username;
        this.name = name;
        this.role = role;
    }

    public String getToken() {
        return this.jwttoken;
    }
}
