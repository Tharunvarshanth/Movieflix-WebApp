package com.app.movieflix.controller;


import com.app.movieflix.model.Role;
import com.app.movieflix.model.User;
import com.app.movieflix.repositary.RoleRepositary;
import com.app.movieflix.repositary.UserRepositary;
import com.app.movieflix.security.JwtResponse;
import com.app.movieflix.security.JwtTokenUtil;
import com.app.movieflix.security.JwtUserDetailsService;
import com.app.movieflix.security.Token;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private PasswordEncoder bcryptEncoder;

    @Autowired
    UserRepositary userRepositary;

    @Autowired
    RoleRepositary roleRepositary;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;


    @Autowired
    private JwtUserDetailsService userDetailsService;

    public UserController(UserRepositary _userRepositary){
        this.userRepositary = _userRepositary;
    }



    @PostMapping("/register")
    public ResponseEntity<?> signup(@RequestBody  User user) throws Exception {

       if(userRepositary.existsUserByUsername(user.getUsername())) {
           System.out.println("user.getEmail()");
           return  ResponseEntity.status(HttpStatus.BAD_REQUEST).body(("Error: Username is already taken!"));
       }
       //Create token
        //newUser.setPassword(bcryptEncoder.encode(user.getPassword()));
        user.setPassword(bcryptEncoder.encode(user.getPassword()));
        user.setEnabled(true);
        Role userRole = roleRepositary.findByRole("editor");
        user.setRoles(userRole);
        User _user = userRepositary.save(user);

        final UserDetails userDetails = userDetailsService.loadUserByUsername(_user.getUsername());

        final String token = jwtTokenUtil.generateToken(userDetails);
        System.out.println(token);
        return ResponseEntity.status(HttpStatus.CREATED).body(new JwtResponse(token,_user.getUsername(),_user.getName(),_user.getRoles().getRole())) ;
    }



    @PostMapping("/login")
    public ResponseEntity<?> signin(@RequestBody User user) throws Exception {
        System.out.println("1 login");
        authenticate(user.getUsername(),user.getPassword());
        final UserDetails userDetails = userDetailsService.loadUserByUsername(user.getUsername());

        final String token = jwtTokenUtil.generateToken(userDetails);
        System.out.println(token);
         User _user = userRepositary.findUserByUsername(user.getUsername());
         System.out.println(_user.getUsername());


        return ResponseEntity.ok(new JwtResponse(token,_user.getUsername(),_user.getName(),_user.getRoles().getRole()));
    }


    
    @PostMapping("/authenticate")
    public ResponseEntity<?> authenticate(@RequestBody JwtResponse token){

        final String username = jwtTokenUtil.getUsernameFromToken(token.getToken());
        User _user = userRepositary.findUserByUsername(username);
        return ResponseEntity.ok(new JwtResponse(token.getToken(),_user.getUsername(),_user.getName(),_user.getRoles().getRole()));
    }

    private void authenticate(String username, String password) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (DisabledException e) {
            System.out.println("1");
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            System.out.println("2");
            throw new Exception("INVALID_CREDENTIALS", e);
        }
    }

    @GetMapping("/userinfo")
    public List<User> getuserinfo(){
        System.out.println("jk");
        List<User> userList = userRepositary.findAll();
        return userList;
    }

}
