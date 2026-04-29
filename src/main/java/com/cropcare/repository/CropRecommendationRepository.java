package com.cropcare.repository;

import com.cropcare.entity.CropRecommendation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CropRecommendationRepository
        extends JpaRepository<CropRecommendation, Integer> {

    Optional<CropRecommendation> findBySoilTypeAndWeatherAndMinTempLessThanEqualAndMaxTempGreaterThanEqualAndMinRainLessThanEqualAndMaxRainGreaterThanEqual(
            String soil,
            String weather,
            double temp1,
            double temp2,
            double rain1,
            double rain2
    );
}