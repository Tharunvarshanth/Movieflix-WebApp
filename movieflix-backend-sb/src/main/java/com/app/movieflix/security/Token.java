package com.app.movieflix.security;

public class Token {

    public Token(String token){
        this.token = token;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

  private   String token;
}
