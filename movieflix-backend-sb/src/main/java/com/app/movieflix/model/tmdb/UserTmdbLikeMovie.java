package com.app.movieflix.model.tmdb;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection="usermovieinfo")
public class UserTmdbLikeMovie {
    @Id
    private String _id;
    private String userId;
    private String movieId;
    private String rating;
    private String timestamp;
    private boolean payed;

    public boolean isPayed() {
        return payed;
    }

    public void setPayed(boolean payed) {
        this.payed = payed;
    }

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getMovieId() {
        return movieId;
    }

    public void setMovieId(String movieId) {
        this.movieId = movieId;
    }

    public String getRating() {
        return rating;
    }

    public void setRating(String rating) {
        this.rating = rating;
    }

    public String getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(String timestamp) {
        this.timestamp = timestamp;
    }



    public UserTmdbLikeMovie() {
    }

    public UserTmdbLikeMovie(String _id, String userId, String movieId, String rating, String timestamp,Boolean payed) {
        this._id = _id;
        this.userId = userId;
        this.movieId = movieId;
        this.rating = rating;
        this.timestamp = timestamp;
        this.payed = payed;
    }




}
