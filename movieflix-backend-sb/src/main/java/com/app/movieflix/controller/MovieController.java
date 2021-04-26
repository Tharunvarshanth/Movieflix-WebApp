package com.app.movieflix.controller;


import com.app.movieflix.model.Image;
import com.app.movieflix.model.Movie;
import com.app.movieflix.repositary.InputSelectListRepositary;
import com.app.movieflix.repositary.MovieRepositary;
import org.bson.BsonBinarySubType;
import org.bson.types.Binary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/admin")
public class MovieController {

    @Autowired
    MovieRepositary movieRepositary;

    public MovieController( MovieRepositary _movieRepositary){
        this.movieRepositary = _movieRepositary;
    }

    @PutMapping("/updatemovie")
    public ResponseEntity<?> updatemoviebyid(@RequestBody Movie movie){
        System.out.println(movie.get_id());
        Movie updatemovie = movieRepositary.findBy_id(movie.get_id());
        if(updatemovie!=null){
            updatemovie.setMovieName(movie.getMovieName());
            updatemovie.setGeners(movie.getGeners());
            updatemovie.setLanguage(movie.getLanguage());
            updatemovie.setProducers(movie.getProducers());
            updatemovie.setDirectors(movie.getDirectors());
            updatemovie.setCastelist(movie.getCastelist());
            updatemovie.setRuntime(movie.getRuntime());
            updatemovie.setVideourl(movie.getVideourl());
            updatemovie.setDescription(movie.getDescription());

            return new ResponseEntity<>(movieRepositary.save(updatemovie), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }


    }
    @DeleteMapping("/removemovie")
    public  ResponseEntity<?> deleteMovieById(@RequestParam("id") String id){
        System.out.println(id);
        movieRepositary.deleteById(id);
        if(movieRepositary.existsBy_id(id)){
            System.out.println("fek");
            return  ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
        return  ResponseEntity.status(HttpStatus.OK).body(null);


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
            System.out.println(movie2.getReleaseDate());
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
