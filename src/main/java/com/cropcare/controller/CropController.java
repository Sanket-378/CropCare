package com.cropcare.controller;

import com.cropcare.service.CropService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/crop")
@CrossOrigin("*")
public class CropController {

    @Autowired
    private CropService service;

    @GetMapping("/recommend")
    public String recommendCrop(
            @RequestParam String soil,
            @RequestParam String weather,
            @RequestParam double temp,
            @RequestParam double rain
    ) {

        return service.getCrop(
                soil,
                weather,
                temp,
                rain
        );
    }
}