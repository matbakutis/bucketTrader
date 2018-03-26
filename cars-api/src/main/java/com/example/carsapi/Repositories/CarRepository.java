package com.example.carsapi.Repositories;

import com.example.carsapi.Models.Car;
import org.springframework.data.repository.CrudRepository;

public interface CarRepository extends CrudRepository<Car, Long> {

}