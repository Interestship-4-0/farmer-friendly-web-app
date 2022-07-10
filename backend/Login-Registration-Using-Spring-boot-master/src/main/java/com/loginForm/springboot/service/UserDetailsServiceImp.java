package com.loginForm.springboot.service;

import com.loginForm.springboot.model.Role;
import com.loginForm.springboot.model.User;
import com.loginForm.springboot.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import javax.transaction.Transactional;
import java.util.HashSet;
import java.util.Set;

public class UserDetailsServiceImp implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username){
            User user = userRepository.findByEmail(username);
            if(user==null)throw new UsernameNotFoundException(username);

            Set<GrantedAuthority> grantedAuthorities=new HashSet<>();
            for(Role role:user.getRoles()){
            grantedAuthorities.add(new SimpleGrantedAuthority(role.getName()));
            }

            return new org.springframework.security.core.userdetails.User(user.getEmail(),user.getPassword(),grantedAuthorities);
            }
}
