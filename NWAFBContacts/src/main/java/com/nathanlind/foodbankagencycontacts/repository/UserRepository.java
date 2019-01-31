package com.nathanlind.foodbankagencycontacts.repository;

import com.nathanlind.foodbankagencycontacts.model.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {

    User findByUsername(String username);
    User getById(Long id);
}
