package com.app.movieflix.model.tmdb;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="movieIdAndtmdbId")
public class MovieAndTmdb {

    @Id
    private String _id;
    private String movieId;
    private String title;
    private String genres;
    private String tmdbId;

    public MovieAndTmdb() {
    }

    public MovieAndTmdb(String _id, String movieId, String title, String genres, String tmdbId) {
        this._id = _id;
        this.movieId = movieId;
        this.title = title;
        this.genres = genres;
        this.tmdbId = tmdbId;
    }

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public String getMovieId() {
        return movieId;
    }

    public void setMovieId(String movieId) {
        this.movieId = movieId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getGenres() {
        return genres;
    }

    public void setGenres(String genres) {
        this.genres = genres;
    }

    public String getTmdbId() {
        return tmdbId;
    }

    public void setTmdbId(String tmdbId) {
        this.tmdbId = tmdbId;
    }
}
