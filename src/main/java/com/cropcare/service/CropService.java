package com.cropcare.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.client.SimpleClientHttpRequestFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.client.RestClientException;

import java.util.HashMap;
import java.util.Map;

@Service
public class CropService {

    // Set this in application.properties (or as a Render environment variable)
    // e.g. flask.crop.url=https://cropcare-disease.onrender.com/predict_crop
    @Value("${flask.crop.url}")
    private String flaskUrl;

    public String getCrop(String soil,
                          String weather,
                          double temp,
                          double rain) {

        RestTemplate restTemplate = buildRestTemplate();

        Map<String, Object> request = new HashMap<>();

        request.put("soil", soil);
        request.put("weather", weather);
        request.put("temp", temp);
        request.put("rain", rain);

        try {

            Map response = restTemplate.postForObject(
                    flaskUrl,
                    request,
                    Map.class
            );

            if (response == null || response.get("crop") == null) {
                throw new RuntimeException("Empty response from crop recommendation service");
            }

            return response.get("crop").toString();

        } catch (RestClientException e) {

            // Covers timeouts, connection refused (Flask asleep/down), 4xx/5xx errors
            throw new RuntimeException(
                    "Crop recommendation service is unavailable right now. Please try again in a moment.",
                    e
            );
        }
    }

    private RestTemplate buildRestTemplate() {

        SimpleClientHttpRequestFactory factory = new SimpleClientHttpRequestFactory();

        // Render free-tier cold start can take 60-90s if the Flask service was idle.
        // Connect timeout can stay short-ish; read timeout needs to cover cold start + inference.
        factory.setConnectTimeout(15000);   // 15s to establish connection
        factory.setReadTimeout(90000);      // 90s to allow for cold start + prediction

        return new RestTemplate(factory);
    }
}