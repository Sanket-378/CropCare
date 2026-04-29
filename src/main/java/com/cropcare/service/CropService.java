package com.cropcare.service;

import com.cropcare.entity.CropRecommendation;
import com.cropcare.repository.CropRecommendationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CropService {

    @Autowired
    private CropRecommendationRepository repo;

    public String getCrop(String soil, String weather, double temp, double rain) {

        Optional<CropRecommendation> result =
                repo.findBySoilTypeAndWeatherAndMinTempLessThanEqualAndMaxTempGreaterThanEqualAndMinRainLessThanEqualAndMaxRainGreaterThanEqual(
                        soil, weather, temp, temp, rain, rain
                );

        return result.map(CropRecommendation::getCropName)
                .orElse("No suitable crop found");
    }
}