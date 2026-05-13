package com.cropcare.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@Service
public class CropService {

    public String getCrop(String soil,
                          String weather,
                          double temp,
                          double rain) {

        String flaskUrl = "http://127.0.0.1:5001/predict_crop";

        RestTemplate restTemplate = new RestTemplate();

        Map<String, Object> request = new HashMap<>();

        request.put("soil", soil);
        request.put("weather", weather);
        request.put("temp", temp);
        request.put("rain", rain);

        Map response = restTemplate.postForObject(
                flaskUrl,
                request,
                Map.class
        );

        return response.get("crop").toString();
    }
}