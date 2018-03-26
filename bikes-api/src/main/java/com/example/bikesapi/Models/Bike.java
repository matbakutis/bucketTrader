package com.example.bikesapi.Models;

import lombok.*;
import javax.persistence.*;
import java.util.ArrayList;

@Data
@AllArgsConstructor @NoArgsConstructor @Getter @Setter
@Entity @Table(name = "bikes")
public class Bike {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "make")
    private String make;

    @Column(name = "model")
    private String model;

    @Column(name = "miles")
    private int miles;

    @Column(name = "picture_urls")
    private ArrayList<String> pictures;

    @Column(name = "owner")
    private String owner;

}