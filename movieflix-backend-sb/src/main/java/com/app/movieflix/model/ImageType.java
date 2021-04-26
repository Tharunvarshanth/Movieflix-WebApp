package com.app.movieflix.model;

import org.bson.types.Binary;

public class ImageType {

    public ImageType(int type, Binary data) {
        this.type = type;
        this.data = data;
    }

    private int type;
    private Binary data;
}
