package com.loginForm.springboot.service;

public interface SecurityService {
    String findLoggedInUsername();

    void autoLogin(String username, String password);
}
