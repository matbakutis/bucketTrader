package com.example.usersapi.Repositories;

import com.example.usersapi.Models.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {

}