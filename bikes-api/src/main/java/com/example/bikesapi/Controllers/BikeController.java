package com.example.bikesapi.Controllers;

import com.example.bikesapi.Models.Bike;
import com.example.bikesapi.Repositories.BikeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
public class BikeController {

    @Autowired
    private BikeRepository bikeRepository;

    @GetMapping("/bikes")
    public Iterable<Bike> findAllBikes() {
        return bikeRepository.findAll();
    }

    @GetMapping("/bikes/{bikeId}")
    public Bike findBikeById(@PathVariable Long bikeId) {
        return bikeRepository.findOne(bikeId);
    }

    @DeleteMapping("/bikes/{bikeId}")
    public HttpStatus deleteBikeById(@PathVariable Long bikeId) {
        bikeRepository.delete(bikeId);
        return HttpStatus.OK;
    }

    @PostMapping("/bikes")
    public Bike createNewBike(@RequestBody Bike newBike) {
        return bikeRepository.save(newBike);
    }

    @PutMapping("/bikes/{bikeId}")
    public Bike updateBikeById(@PathVariable Long bikeId, @RequestBody Bike bikeRequest) {

        Bike bikeFromDb = bikeRepository.findOne(bikeId);

        bikeFromDb.setMake(bikeRequest.getMake());
        bikeFromDb.setModel(bikeRequest.getModel());

        return bikeRepository.save(bikeFromDb);
    }

}