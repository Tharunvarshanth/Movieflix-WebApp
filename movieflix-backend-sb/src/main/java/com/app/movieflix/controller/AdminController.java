package com.app.movieflix.controller;


import com.app.movieflix.model.Image;
import com.app.movieflix.model.Movie;
import com.app.movieflix.repositary.InputSelectListRepositary;
import com.app.movieflix.repositary.MovieRepositary;
import org.bson.BsonBinarySubType;
import org.bson.types.Binary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

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


    public AdminController(InputSelectListRepositary _inputSelectListRepositary,MovieRepositary _movieRepositary){
         this.inputSelectListRepositary = _inputSelectListRepositary;
         this.movieRepositary = _movieRepositary;
    }

    @GetMapping("/getmoviebymoviename")
    public ResponseEntity<?> getmoviebymoviename(@RequestParam("name")String name){

        Movie movie2 = (movieRepositary.findByMovieName(name));
        if(movie2!=null){
            return ResponseEntity.ok(movie2);
        }else{
            return ResponseEntity.ok(null);
        }
    }

    @GetMapping("/searchbymoviename")
    public List<Movie> searchbyname(@RequestParam("text")String text){
     System.out.println(text);
      return  movieRepositary.findMoviesByMovieNameStartingWith(text);

    }


    @PostMapping("/addmovie")
    public ResponseEntity<?> addNewMovie(@RequestBody Movie movie) {
         System.out.println(movie.getReleaseDate());
        if (movieRepositary.existsByMovieName(movie.getMovieName())) {
            System.out.println("exists");
           return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(("Error: Movie name is already taken!"));
        }
        else {
            Movie movie1 = (movieRepositary.save(movie));
            Movie movie2 = (movieRepositary.findByMovieName(movie1.getMovieName()));
            System.out.println(movie2.get_id() + "  " + movie2.getMovieName());
            return ResponseEntity.status(HttpStatus.CREATED).body(movie2);
        }
    }


    @PostMapping("/uploadposter")
    public ResponseEntity<?> uploadPoster(@RequestParam("id")String _id, @RequestParam("imageFile") MultipartFile file) throws IOException {

        if(movieRepositary.existsBy_id(_id)) {
            Movie movie = movieRepositary.findBy_id(_id);
            Image i = new Image(file.getOriginalFilename(),file.getContentType(),
                      new Binary(BsonBinarySubType.BINARY, file.getBytes()));
            List<Image> imageList;

            if(movie.getPoster()!=null) {
                imageList    = movie.getPoster();
                imageList.add(i);
            }
            else{
                imageList = new ArrayList<Image>();
                imageList.add(i);
            }
            movie.setPoster(imageList);
            movieRepositary.save(movie);

            return ResponseEntity.status(HttpStatus.CREATED).body("photo added");
        }else {

            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error Photo upload failure");
        }
    }




}
