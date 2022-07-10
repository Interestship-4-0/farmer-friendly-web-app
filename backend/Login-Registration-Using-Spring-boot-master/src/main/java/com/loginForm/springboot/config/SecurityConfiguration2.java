package com.loginForm.springboot.config;

import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;

public interface SecurityConfiguration2 {
    void configure(AuthenticationManagerBuilder auth) throws Exception;
}
