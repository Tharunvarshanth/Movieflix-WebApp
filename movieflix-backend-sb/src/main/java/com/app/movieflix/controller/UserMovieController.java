package com.app.movieflix.controller;


import com.app.movieflix.model.tmdb.MovieAndTmdb;
import com.app.movieflix.model.tmdb.UserTmdbLikeMovie;
import com.app.movieflix.repositary.tmdb.MovieAndTmdbRepositary;
import com.app.movieflix.repositary.tmdb.UserTmdbLikedMovieRepositary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("api/usermovie")
public class UserMovieController {
    @Autowired
    UserTmdbLikedMovieRepositary userTmdbLikedMovieRepositary;

    @Autowired
    MovieAndTmdbRepositary movieAndTmdbRepositary;

    public UserMovieController(UserTmdbLikedMovieRepositary _userTmdbLikedMovieRepositary){
        userTmdbLikedMovieRepositary = _userTmdbLikedMovieRepositary;
    }




    @GetMapping("/movielike")
    public ResponseEntity<?> getusermovieinfo(@RequestParam("name") String name){
        // It's return  UserTmdbLikeMovie
        List<UserTmdbLikeMovie> _userTmdbLikeMovie = userTmdbLikedMovieRepositary.findAllByUserId(name);
       if(_userTmdbLikeMovie !=null) {
           return ResponseEntity.status(HttpStatus.OK).body(_userTmdbLikeMovie);
       }
       return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);

    }

    @GetMapping("/movieliketmdbid")
    public ResponseEntity<?> getusermovietmdbinfo(@RequestParam("name") String name){
        //it return tmdb id of the movies user liked

        List<UserTmdbLikeMovie> _userTmdbLikeMovielist = userTmdbLikedMovieRepositary.findAllByUserId(name);
        List<String> movieAndTmdbList = new ArrayList<String>();
        if(_userTmdbLikeMovielist!=null){
            for(UserTmdbLikeMovie utlm:_userTmdbLikeMovielist){
             MovieAndTmdb _movieandtmdb = movieAndTmdbRepositary.findByMovieId(utlm.getMovieId());
             if(_movieandtmdb!=null){
                 movieAndTmdbList.add(_movieandtmdb.getTmdbId());
             }
            }
            return ResponseEntity.status(HttpStatus.OK).body(movieAndTmdbList);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);

    }

/*
    @PostMapping("/updateusermovie")
    public ResponseEntity<?> updateusermovie(@RequestBody UserTmdbLikeMovie userTmdbLikeMovie){
        if(isuserhascollection(userTmdbLikeMovie.getUsername())){
            UserTmdbLikeMovie userTmdbLikeMovie1 = userMovieRepositary.findUserMoviesByUsername(userTmdbLikeMovie.getUsername());
            System.out.println("d");
            List<UserBoughtMovieList> list = userTmdbLikeMovie1.getMovieList() ;
            list.add(userTmdbLikeMovie.getMovieList().get(0));
            userTmdbLikeMovie1.setMovieList(list);
            userMovieRepositary.save(userTmdbLikeMovie1);
            return ResponseEntity.status(HttpStatus.OK).body(userTmdbLikeMovie);
        }
        else{
            UserTmdbLikeMovie userTmdbLikeMovie1 =     userMovieRepositary.save(userTmdbLikeMovie);
            return ResponseEntity.status(HttpStatus.CREATED).body(userTmdbLikeMovie1);
        }
    }
    */
 /*
    @PutMapping("/updateusermovierating")
    public ResponseEntity<?> updateusermovierating(@RequestBody UserTmdbLikeMovie userTmdbLikeMovie){

        UserTmdbLikeMovie tempuserTmdbLikeMovie = userMovieRepositary.findUserMoviesByUsername(userTmdbLikeMovie.getUsername());

        if(tempuserTmdbLikeMovie !=null){
            List<UserBoughtMovieList> list = tempuserTmdbLikeMovie.getMovieList();
            int i=0;

            for ( UserBoughtMovieList uml:list) {

               if(uml.getMoviename().equals(userTmdbLikeMovie.getMovieList().get(0).getMoviename())){
                   list.remove(i);
                   list.add(i, userTmdbLikeMovie.getMovieList().get(0));
                   tempuserTmdbLikeMovie.setMovieList(list);
                   userMovieRepositary.save(tempuserTmdbLikeMovie);
                   return  ResponseEntity.status(HttpStatus.OK).body("updated");
               }
               i++;
            }
        }
         return  ResponseEntity.status(HttpStatus.BAD_REQUEST).body("error");
    }
    */

}
