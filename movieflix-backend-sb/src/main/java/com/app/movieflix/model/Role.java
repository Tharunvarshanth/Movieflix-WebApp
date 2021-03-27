package com.app.movieflix.model;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("roles")
public class Role {

    public Role(String _id, String role) {
        this._id = _id;
        this.role = role;
    }

    @Id
    String _id;

    public void set_id(String _id) {
        this._id = _id;
    }

    public String get_id() {
        return _id;
    }



    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    String role;
}
