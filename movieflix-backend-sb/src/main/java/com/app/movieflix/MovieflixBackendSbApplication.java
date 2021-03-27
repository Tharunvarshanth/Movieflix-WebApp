package com.app.movieflix;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class MovieflixBackendSbApplication {

	public static void main(String[] args) {
		System.out.println("main login");
		SpringApplication.run(MovieflixBackendSbApplication.class, args);
	}



}
