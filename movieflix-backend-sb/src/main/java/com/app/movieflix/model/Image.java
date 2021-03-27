package com.app.movieflix.model;


import org.bson.types.Binary;

public class Image {

    public Image() {
        super();
    }

    public Image(String name, String type, Binary picByte) {
        this.name = name;
        this.type = type;
        this.picByte = picByte;
    }
    private String name;
    private String type;
    private Binary picByte;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Binary getPicByte() {
        return picByte;
    }

    public void setPicByte(Binary picByte) {
        this.picByte = picByte;
    }
}