package com.loginForm.springboot.validator;

import com.loginForm.springboot.model.User;
import com.loginForm.springboot.service.UserService;
import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;

public class UserValidator implements Validator {
    private UserService userService;

    @Override
    public boolean supports(Class<?> aClass) {
        return User.class.equals(aClass);
    }

    @Override
    public void validate(Object o, Errors errors) {
        User user = (User) o;

        ValidationUtils.rejectIfEmptyOrWhitespace(errors, "username", "NotEmpty");
        if (user.getEmail().length() < 6 || user.getEmail().length() > 32) {
            errors.rejectValue("username", "Size.userForm.username");
        }
//        if (userService.findByEmail(user.getEmail()) != null) {
//            errors.rejectValue("username", "Duplicate.userForm.username");
//        }

//        ValidationUtils.rejectIfEmptyOrWhitespace(errors, "password", "NotEmpty");
//        if (user.getPassword().length() < 8 || user.getPassword().length() > 32) {
//            errors.rejectValue("password", "Size.userForm.password");
//        }

//        if (!user.getPassword().equals(user.getPassword())) {
//            errors.rejectValue("passwordConfirm", "Diff.userForm.passwordConfirm");
//        }
    }
}
