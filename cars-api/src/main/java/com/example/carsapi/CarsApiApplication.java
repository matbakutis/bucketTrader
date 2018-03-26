package com.example.carsapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class CarsApiApplication {
	public static void main(String[] args) {
		SpringApplication.run(CarsApiApplication.class, args);
	}
}