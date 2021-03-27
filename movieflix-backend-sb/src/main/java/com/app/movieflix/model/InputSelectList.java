package com.app.movieflix.model;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "formcollections")
public class InputSelectList {

  @Id
  private  String _id;
  private List<String> generes;

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public List<String> getGeneres() {
        return generes;
    }

    public void setGeneres(List<String> generes) {
        this.generes = generes;
    }

    public List<String> getCountries() {
        return countries;
    }

    public void setCountries(List<String> countries) {
        this.countries = countries;
    }

    public List<String> getLanguages() {
        return languages;
    }

    public void setLanguages(List<String> languages) {
        this.languages = languages;
    }

    private  List<String> countries;
  private List<String> languages;

    public InputSelectList(String _id, List<String> generes, List<String> countries, List<String> languages) {
        this._id = _id;
        this.generes = generes;
        this.countries = countries;
        this.languages = languages;
    }







}
