package com.loginForm.springboot.Registration;

import java.util.Collection;

public class UserModel {
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String phoneNo;
    private String dob;
    private String state;
    private String village;
    private String aadharNo;
    private String password;

    public UserModel() {
    }


    public UserModel(String firstName, String lastName, String email, String phoneNo,
                String dob,
                String village, String state,
                String aadharNo, String password ) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNo = phoneNo;
        this.dob = dob;
        this.state = state;
        this.village =village;
        this.aadharNo = aadharNo;
        this.password = password;
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getFirstName() {
        return firstName;
    }
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    public String getLastName() {
        return lastName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPhoneNo() {
        return phoneNo;
    }
    public void setPhoneNo(String phoneNo) {
        this.phoneNo = phoneNo;
    }
    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }
    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }
    public String getVillage() {
        return village;
    }

    public void setVillage(String village) {
        this.village = village;
    }


    public String getAadharNo() {
        return aadharNo;
    }

    public void setAadharNo(String aadharNo) {
        this.aadharNo = aadharNo;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

}


