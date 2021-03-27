package com.app.movieflix.security;


import com.app.movieflix.model.Role;
import com.app.movieflix.model.User;
import com.app.movieflix.repositary.UserRepositary;
import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class JwtUserDetailsService implements UserDetailsService {

    @Autowired
    UserRepositary userRepositary;


    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        User _user = userRepositary.findUserByUsername(username);
        if (_user == null) {
            throw new UsernameNotFoundException("User not found with username: " + username);
        }
        List<GrantedAuthority> authorities = getUserAuthority(_user.getRoles());
      return  buildUserForAuthentication(_user, authorities);

    }
    private List<GrantedAuthority> getUserAuthority(Role userRoles) {
        Set<GrantedAuthority> roles = new HashSet<>();

            roles.add(new SimpleGrantedAuthority(userRoles.getRole()));


        List<GrantedAuthority> grantedAuthorities = new ArrayList<>(roles);
        return grantedAuthorities;
    }

    private UserDetails buildUserForAuthentication(User user, List<GrantedAuthority> authorities) {
        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), authorities);
    }
}
