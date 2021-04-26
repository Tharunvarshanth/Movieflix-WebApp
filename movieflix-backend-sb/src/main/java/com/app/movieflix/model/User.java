package com.app.movieflix.model;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Set;

@Document(collection = "users")
public class User {

    @Id
    private String _id;
    private String username;
    private String password;
    private String name;
    private String phonenumber;
    private boolean enabled;
    @DBRef
    private Role roles;
   // private Set<Role> roles;
    public User() {
    }




    public String getId() {
        return _id;
    }

    public void setId(String id) {
        this._id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhonenumber() {
        return phonenumber;
    }

    public void setPhonenumber(String phonenumber) {
        this.phonenumber = phonenumber;
    }

    public boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }

    public Role getRoles() {
        return roles;
    }

    public void setRoles(Role roles) {
        this.roles = roles;
    }

    public User(String _id, String username, String password, String name, String phonenumber) {
        this._id = _id;
        this.username = username;
        this.password = password;
        this.name = name;
        this.phonenumber = phonenumber;
    }



}
