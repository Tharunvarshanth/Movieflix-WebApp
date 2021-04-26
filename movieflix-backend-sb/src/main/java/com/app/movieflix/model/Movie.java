package com.app.movieflix.model;


import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;


import java.util.Date;
import java.util.List;

@Document(collection = "movies")
public class Movie {
    @Id
    private String _id;
    private String movieName;
    private List<String> geners;
    private String cost;
    @JsonFormat(shape= JsonFormat.Shape.STRING, pattern="yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", timezone="GMT")
    private Date releaseDate;
    private String language;
    private List<String> producers;
    private List<String> castelist;
    private List<String> directors;
    private String runtime;
    private String description;
    private String videourl;
    //@DBRef
    private List<Image> poster;




    public Movie(String _id, String movieName, List<String> geners, String language, List<String> producers, List<String> castelist, List<String> directors, String runtime, String description, String videourl,Date releaseDate,String cost   ) {
        this._id = _id;
        this.movieName = movieName;
        this.geners = geners;
        this.language = language;
        this.producers = producers;
        this.castelist = castelist;
        this.directors = directors;
        this.runtime = runtime;
        this.description = description;
        this.videourl = videourl;
        this.releaseDate = releaseDate;
        this.cost = cost;
    }

    public String getCost() {
        return cost;
    }

    public void setCost(String cost) {
        this.cost = cost;
    }
    public Date getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(Date releaseDate) {
        this.releaseDate = releaseDate;
    }

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public String getMovieName() {
        return movieName;
    }

    public void setMovieName(String movieName) {
        this.movieName = movieName;
    }

    public List<String> getGeners() {
        return geners;
    }

    public void setGeners(List<String> geners) {
        this.geners = geners;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public List<String> getProducers() {
        return producers;
    }

    public void setProducers(List<String> producers) {
        this.producers = producers;
    }

    public List<String> getCastelist() {
        return castelist;
    }

    public void setCastelist(List<String> castelist) {
        this.castelist = castelist;
    }

    public List<String> getDirectors() {
        return directors;
    }

    public void setDirectors(List<String> directors) {
        this.directors = directors;
    }

    public String getRuntime() {
        return runtime;
    }

    public void setRuntime(String runtime) {
        this.runtime = runtime;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getVideourl() {
        return videourl;
    }

    public void setVideourl(String videourl) {
        this.videourl = videourl;
    }

    public List<Image> getPoster() {
        return poster;
    }

    public void setPoster(List<Image> poster) {
        this.poster = poster;
    }
}
