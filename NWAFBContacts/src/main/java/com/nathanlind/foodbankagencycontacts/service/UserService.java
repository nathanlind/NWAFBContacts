package com.nathanlind.foodbankagencycontacts.service;

import com.nathanlind.foodbankagencycontacts.exception.UserNameException;
import com.nathanlind.foodbankagencycontacts.model.User;
import com.nathanlind.foodbankagencycontacts.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;


    public User saveUser (User newUser) {

        try {
            newUser.setPassword(bCryptPasswordEncoder.encode(newUser.getPassword()));
            newUser.setUsername(newUser.getUsername());
            newUser.setConfirmPassword("");
            return userRepository.save(newUser);
        } catch (Exception e){
            throw new UserNameException("Username '" + newUser.getUsername() + "' already exists.");
        }
    }



}
