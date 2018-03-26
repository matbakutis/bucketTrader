package com.example.bikesapi.Repositories;

import com.example.bikesapi.Models.Bike;
import org.springframework.data.repository.CrudRepository;

public interface BikeRepository extends CrudRepository<Bike, Long> {

}