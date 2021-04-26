package com.app.movieflix.controller;


import com.app.movieflix.model.Image;
import com.app.movieflix.model.Movie;
import com.app.movieflix.model.User;
import com.app.movieflix.repositary.InputSelectListRepositary;
import com.app.movieflix.repositary.MovieRepositary;
import com.app.movieflix.repositary.UserRepositary;
import org.bson.BsonBinarySubType;
import org.bson.types.Binary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.management.Query;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @Autowired
    InputSelectListRepositary inputSelectListRepositary;
    @Autowired
    MovieRepositary movieRepositary;
    @Autowired
    UserRepositary userRepositary;


    public AdminController(InputSelectListRepositary _inputSelectListRepositary,MovieRepositary _movieRepositary,UserRepositary _userRepositary){
         this.inputSelectListRepositary = _inputSelectListRepositary;
         this.movieRepositary = _movieRepositary;
         this.userRepositary = _userRepositary;
    }

    @GetMapping("/user/getusersbytext")
    public ResponseEntity<?> getusersbytext(@RequestParam("name")String name) {
        System.out.println(name);
        List<User> userList = userRepositary.findUsersByUsernameStartingWith(name);
        List<User> userList1 = userRepositary.findUsersByNameStartingWith(name);
        if (userList!=null || userList1!=null) {
            List<User> newList = new ArrayList<User>();
            newList.addAll(userList);
            newList.addAll(userList1);
            return ResponseEntity.status(HttpStatus.valueOf(200)).body(newList);
        } else {
            return ResponseEntity.status(HttpStatus.valueOf(404)).body(null);
        }

    }
    @DeleteMapping("/user/deleteuserbyadmin")
    public ResponseEntity<?> deleteuserbyadmin(@RequestParam("id")String id){
         userRepositary.deleteById(id);
        return ResponseEntity.status(HttpStatus.valueOf(200)).body(null);

       

    }




}
