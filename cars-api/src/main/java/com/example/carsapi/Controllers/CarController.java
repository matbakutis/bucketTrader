package com.example.carsapi.Controllers;

import com.example.carsapi.Models.Car;
import com.example.carsapi.Repositories.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
public class CarController {

    @Autowired
    private CarRepository carRepository;

    @GetMapping("/cars")
    public Iterable<Car> findAllCars() {
        return carRepository.findAll();
    }

    @GetMapping("/cars/{carId}")
    public Car findCarById(@PathVariable Long carId) {
        return carRepository.findOne(carId);
    }

    @DeleteMapping("/cars/{carId}")
    public HttpStatus deleteCarById(@PathVariable Long carId) {
        carRepository.delete(carId);
        return HttpStatus.OK;
    }

    @PostMapping("/cars")
    public Car createNewCar(@RequestBody Car newCar) {
        return carRepository.save(newCar);
    }

    @PutMapping("/cars/{carId}")
    public Car updateCarById(@PathVariable Long carId, @RequestBody Car carRequest) {

        Car carFromDb = carRepository.findOne(carId);

        carFromDb.setMake(carRequest.getMake());
        carFromDb.setModel(carRequest.getModel());

        return carRepository.save(carFromDb);
    }

}